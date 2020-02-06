const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const sequelize = require("./database/config/connect");
const User = require("./database/models/").User;
const Token = require("./database/models/").Token;
const cors = require("cors");
const { Client } = require("pg");

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));

app.use(cors());
app.options(
  "*",
  cors({
    origin: "http://localhost:3000"
  })
);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
client.connect();

// client.query(
//   "SELECT table_schema, table_name FROM information_schema.tables;",
//   (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//       console.log(JSON.stringify(row));
//     }
//     client.end();
//   }
// );

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
  return await axios
    .post(
      "https://auth.maas-dev.aws.vsct.fr/oauth2/token",
      "grant_type=client_credentials&scope=https%3A%2F%2Fapi.maas-dev.aws.vsct.fr%2F.*%2Fsearch.*%3A.*",
      {
        headers: {
          Authorization: process.env.AUTH,
          "Content-Type": "application/x-www-form-urlencoded",
          "x-api-key": process.env.API_KEY
        }
      }
    )
    .then(res => {
      return res.data.access_token;
    })
    .catch(err => console.log(err.message));
};

app.get("/getNewToken", async (req, res) => {
  Token.findOne({}).then(async tokenCreate => {
    if (tokenCreate === null) {
      Token.create({
        token: await getNewToken()
      });
    }
    if (tokenCreate) {
      if (!tokenCreate.token) {
        Token.create({
          token: await getNewToken()
        });
      }
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

const searchAroundMe = async () => {
  const newtoken = await getNewToken();

  const getSearchId = async () => {
    return await axios
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
            "x-api-key": process.env.API_KEY,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        return res.data.searchId;
      })
      .catch(err => {
        console.log("Échec searchId ! " + err);
      });
  };

  const getAroundMeResults = async () => {
    const searchId = await getSearchId();
    return await axios
      .get(`https://api.maas-dev.aws.vsct.fr/enc/search/aroundme/${searchId}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${newtoken}`,
          "Content-Type": "application/json",
          "x-api-key": process.env.API_KEY
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
  const newtoken = await getNewToken();

  const destLat = req.query.destLat;
  const destLng = req.query.destLng;
  const oriLat = req.query.oriLat;
  const oriLng = req.query.oriLng;
  const searchDate = req.query.searchDate;
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
  const getSearchId = async () => {
    return await axios
      .post("https://api.maas-dev.aws.vsct.fr/enc/search/itinerary", body, {
        headers: {
          // accept: "application/json",
          Authorization: `Bearer ${newtoken}`,
          "x-api-key": process.env.API_KEY,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        return res.data.searchId;
      })
      .catch(err => {
        console.log("Échec searchId ! " + err);
      });
  };

  const getItineraryResults = async req => {
    const searchId =
      req.query.searchId && req.query.searchId !== ""
        ? req.query.searchId
        : await getSearchId();
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
        return res.data;
      })
      .catch(err => {
        console.log("Échec resItinerary ! " + err);
        throw err;
      });
  };

  return await getItineraryResults(req);
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

app.get("/", (req, res) => {
  res.send("Hello Back");
});
