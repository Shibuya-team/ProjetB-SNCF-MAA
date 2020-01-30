const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
const sequelize = require("./database/config/connect");
const secrets = require("./secrets");
const User = require("./database/models/").User;
const Token = require("./database/models/").Token;
const cors = require("cors");

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));

app.use(cors());
app.options(
  "*",
  cors({
    origin: "http://localhost:3000"
  })
);

sequelize
  .authenticate()
  .then(() => {
    console.log("La connexion a été établie avec succès.");
  })
  .catch(err => {
    console.error(
      "Impossible de se connecter à la base de données :",
      err.message
    );
  });

// TOKEN
const getNewToken = async () => {
  const token = await axios
    .post(
      "https://auth.maas-dev.aws.vsct.fr/oauth2/token",
      "grant_type=client_credentials&scope=https%3A%2F%2Fapi.maas-dev.aws.vsct.fr%2F.*%2Fsearch.*%3A.*",
      {
        headers: {
          Authorization: secrets.auth,
          "Content-Type": "application/x-www-form-urlencoded",
          "x-api-key": secrets.apiKey
        }
      }
    )
    .then(res => {
      return res.data.access_token;
    })
    .catch(err => console.log(err.message));

  return token;
};

app.get("/getNewToken", async (req, res) => {
  Token.findOne({}).then(async tokenCreate => {
    if (!tokenCreate) {
      Token.create({
        token: await getNewToken()
      });
    }

    if (tokenCreate && tokenCreate.createdAt) {
      const result = Math.round(
        (Date.now() - Date.parse(tokenCreate.createdAt)) / 1000
      );
      if (result >= 3600) {
        Token.destroy({
          where: {}
        });
      }
    }
  });
  res.sendStatus(200);
});

// SEARCH AROUNDME
const searchAroundMe = async req => {
  let searchId = null;
  const newtoken = await getNewToken();

  const getSearchId = async () => {
    await axios
      .post(
        "https://api.maas-dev.aws.vsct.fr/enc/search/aroundme",
        {
          // données en dur, à remplacer
          origin: {
            latitude: 48.8534,
            longitude: 2.3488
          },
          radius: 1000
        },
        {
          headers: {
            // accept: "application/json",
            Authorization: `Bearer ${newtoken}`,
            "x-api-key": secrets.apiKey,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        searchId = res.data.searchId;
      })
      .catch(err => {
        console.log("Échec searchId ! " + err);
      });
  };

  const getAroundMeResults = async () => {
    await getSearchId();
    return await axios
      .get(`https://api.maas-dev.aws.vsct.fr/enc/search/aroundme/${searchId}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${newtoken}`,
          "Content-Type": "application/json",
          "x-api-key": secrets.apiKey
        }
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log("Échec resAroundMe ! " + err);
      });
  };

  return await getAroundMeResults();
};

// SEARCH ITINERARY
const searchItinerary = async req => {
  let searchId = null;

  const newtoken = await getNewToken();

  const destLat = req.query.destLat;
  const destLng = req.query.destLng;
  const oriLat = req.query.oriLat;
  const oriLng = req.query.oriLng;
  const searchDate = req.query.searchDate;
  console.log("backend", destLat, destLng, oriLat, oriLng, searchDate);
  const body =
    searchDate !== ""
      ? {
          destination: {
            latitude: destLat,
            longitude: destLng
          },
          origin: {
            latitude: oriLat,
            longitude: oriLng
          },
          searchDate: searchDate
        }
      : {
          destination: {
            latitude: destLat,
            longitude: destLng
          },
          origin: {
            latitude: oriLat,
            longitude: oriLng
          }
        };
  console.log("body", body);
  const getSearchId = async () => {
    await axios
      .post("https://api.maas-dev.aws.vsct.fr/enc/search/itinerary", body, {
        headers: {
          // accept: "application/json",
          Authorization: `Bearer ${newtoken}`,
          "x-api-key": secrets.apiKey,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        searchId = res.data.searchId;
        console.log("OK searchID", searchId);
      })
      .catch(err => {
        console.log("Échec searchId ! " + err);
      });
  };

  const getItineraryResults = async () => {
    await getSearchId();
    return await axios
      .get(
        `https://api.maas-dev.aws.vsct.fr/enc/search/itinerary/${searchId}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${newtoken}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log("Ok resItinerary", res.data);
        return res.data;
      })
      .catch(err => {
        console.log("Échec resItinerary ! " + err);
        throw err;
      });
  };

  return await getItineraryResults();
};

// ROUTES
app.get("/search/aroundme", async (req, response) => {
  const resAroundMe = await searchAroundMe(req);
  response.send(resAroundMe);
});

app.get("/search/itinerary", async (req, response) => {
  const resItinerary = await searchItinerary(req);
  response.send(resItinerary);
});
