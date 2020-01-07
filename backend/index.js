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

// app.get("/token", async (req, res) => {
//   const token = await getNewToken();

//   console.log(token);
//   res.send(token);
// });

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

const search = async () => {
  let searchId = null;
  let resItinerary = {};

  const newtoken = await getNewToken();

  const getSearchId = async () => {
    console.log("getSearchId newtoken : ", newtoken);

    // "https://api.maas-dev.aws.vsct.fr/enc/search/itinerary" -H  "accept: application/json" -H  "Content-Type: application/json" -H "Authorization: Bearer " -d "{\"destination\":{\"latitude\":0,\"longitude\":0},\"mobilityTypes\":[\"VEHICLE_WITH_DRIVER\"],\"origin\":{\"latitude\":0,\"longitude\":0},\"partners\":[\"string\"],\"searchDate\":\"2020-01-09T13:54:20.026Z\"}"
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
        console.log("OK ! searchId : " + searchId);
      })
      .catch(err => {
        console.log(
          "Échec search hjgjgj! " + util.inspect(err.response.config)
        );
      });
  };

  const getItineraryResults = async () => {
    await getSearchId();
    console.log("search", searchId);
    return await axios
      .get(
        `https://api.maas-dev.aws.vsct.fr/enc/search/itinerary/${searchId}`,
        {
          headers: `Bearer ${newtoken}`
        }
      )
      .then(res => {
        resItinerary = res.data;
        console.log("resItinerary : " + resItinerary);
      })
      .catch(err => {
        console.log("Échec resItinerary ! " + err);
      });
  };
  return await getItineraryResults();
};

app.get("/search", async (req, response) => {
  const resItinerary = await search();
  console.log(resItinerary);
  response.send(resItinerary);
});

app.get("/test", async (req, res) => {
  const token = await getNewToken;

  axios
    .post(
      "https://api.maas-dev.aws.vsct.fr/enc/search/itinerary",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-api-key": "IxcoQOJ2xe4sqEl9bwKpH1EwxPPJhTLc1xxvEgjp",
          "Content-Type": "application/json"
        }
      },
      {
        destination: {
          latitude: 48.9595466,
          longitude: 2.3424024
        },
        origin: {
          latitude: 48.8534,
          longitude: 2.3488
        }
      }
    )
    .then(result => {
      console.log(res);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});
