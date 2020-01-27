const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
const sequelize = require("./database/config/connect");
const secrets = require("./secrets");

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

// TOKEN
const getNewToken = async () => {
  let token = "";
  let expires_time = 0;
  await axios
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
      token = res.data.access_token;
      expires_time = Math.floor(Date.now() / 1000) + res.data.expires_in;
      console.log(
        "OK ! un nouveau token d'accès vient d'être généré avec succés."
      );
      // envoyer ces deux variables dans stockage données : champs : "token" et "token_created_time"
    })
    .catch(err => {
      console.log(err.message);
    });

  return token;
};

// SEARCH ITINERARY
const searchItinerary = async () => {
  let searchId = null;
  let resItinerary = {};

  const newtoken = await getNewToken();

  const getSearchId = async () => {
    await axios
      .post(
        "https://api.maas-dev.aws.vsct.fr/enc/search/itinerary",
        {
          // données en dur, à remplacer
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
        console.log("OK ! searchId obtenu avec succès : " + searchId);
      })
      .catch(err => {
        console.log("Échec searchId ! " + err);
      });
  };

  const getItineraryResults = async () => {
    await getSearchId();
    console.log("token utilisé : ", newtoken);
    console.log("searchId utilisé : ", searchId);
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
        resItinerary = res.data;
        console.log("Succès resItinerary : " + resItinerary);
      })
      .catch(err => {
        console.log("Échec resItinerary ! " + err);
      });
  };
  await getItineraryResults();
  return resItinerary;
};

app.get("/search/itinerary", async (req, response) => {
  const resItinerary = await searchItinerary();
  console.log(resItinerary);
  response.send(resItinerary);
});
