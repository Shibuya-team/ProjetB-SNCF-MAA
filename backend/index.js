const express = require("express");
const axios = require("axios");
const util = require("util");
const app = express();
const PORT = 5000;
// const bodyParser = require("body-parser");
const sequelize = require("./database/config/connect");
const secrets = require("./secrets");
// const mock = require("./mockData");
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
      // console.log("token : " + token);
      // console.log("enregistré à :" + expires_time);
      // envoyer ces deux variables dans stockage données : champs : "token" et "token_created_time"
    })
    .catch(err => {
      console.log(err.message);
    });

  return token;
};

// // fonction appelée à chaque fois que le client valide une recherche "itinéraire" ou "around me", pour récupérer son token ou en générer un nouveau
// // const getToken = () => {
// //   let token = User.findAll({ where: { id: mock.userId } }).then(user => {}); // récupérer champ "token" dans la table "user"
// //   let expires_time = User.findAll({}); // récupérer champ "token_created_time" dans la table "user"
// //   if (token === "" || token === null || !token) {
// //     getNewToken(token, expires_time);
// //   } else {
// //     const dateNow = Math.floor(Date.now() / 1000);
// //     if (dateNow - expires_time >= 0) {
// //       getNewToken(token, expires_time);
// //     }
// //   }
// //   return token;
// // };

// à compléter : fonction de validation de la recherche
const searchItinerary = async () => {
  let searchId = null;
  let resItinerary = {};

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
        console.log("OK ! searchId obtenu avec succès : " + searchId);
      })
      .catch(err => {
        console.log("Échec searchId ! " + err);
        // console.log("Échec searchId ! " + util.inspect(err.response.config));
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
