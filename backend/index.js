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

// SEARCH AROUNDME
const searchAroundMe = async () => {
  let searchId = null;
  let resAroundMe = {};

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
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        resAroundMe = res.data;
      })
      .catch(err => {
        console.log("Échec resAroundMe ! " + err);
      });
  };
  await getAroundMeResults();
  return resAroundMe;
};

app.get("/search/aroundme", async (req, response) => {
  const resAroundMe = await searchAroundMe();
  response.send(resAroundMe);
});
