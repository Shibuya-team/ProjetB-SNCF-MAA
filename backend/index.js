const express = require("express");
const axios = require("axios");
const util = require("util");
const app = express();
const PORT = 5000;
// const bodyParser = require("body-parser");
const sequelize = require("./database/config/connect");
const secrets = require("./secrets");
// const User = require("./database/models/").User;

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

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));

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

// Search ITINERARY
const searchItinerary = async () => {
  let searchId = null;

  const newtoken = await getNewToken();

  const getSearchId = async () => {
    await axios
      .post(
        "https://api.maas-dev.aws.vsct.fr/enc/search/itinerary",
        {
          destination: {
            latitude: 48.9595466,
            longitude: 2.3424024
          },
          origin: {
            latitude: 48.8534,
            longitude: 2.3488
          }
          // "searchDate": "2020-01-03T09:54:20.026Z"
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
        return res.data;
      })
      .catch(err => {
        console.log("Échec resItinerary ! " + err);
      });
  };

  return await getItineraryResults();
};

app.get("/search/itinerary", async (req, response) => {
  const resItinerary = await searchItinerary();
  response.send(resItinerary);
});
