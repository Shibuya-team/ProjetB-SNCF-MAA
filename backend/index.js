const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const sequelize = require("./database/config/connect");
const secrets = require("./secrets");
const mock = require("./mockData");
const User = require("./database/models/").User;

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

app.get("/", (req, res) => {
  res.send("Hello Back !");
});

const getNewToken = (token, expires_time) => {
  axios
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
      expires_time = Math.floor(Date.now()) / 1000 + res.data.expires_in;
      // envoyer ces deux variables dans stockage données : champs : "token" et "token_created_time"

      });
    })
    .catch(err => console.log(err.message));
};

// fonction appelée à chaque fois que le client valide une recherche "itinéraire" ou "around me", pour récupérer son token ou en générer un nouveau
const getToken = () => {
  let token = User.findAll({where : {id: mock.userId}}).then(user => ); // récupérer champ "token" dans la table "user"
  let expires_time = User.findAll(......); // récupérer champ "token_created_time" dans la table "user"
  if (token === "" || token === null || !token) {
    getNewToken(token, expires_time);
  } else {
    const dateNow = Math.floor(Date.now()) / 1000;
    if (dateNow - expires_time >= 0) {
      getNewToken(token, expires_time);
    }
  }
  return token;
};

// à compléter
const search = () => {
  const token = getToken();
  axios
    .post()
    .then(res => {
      const results = res.data;
    })
    .catch(err => console.log(err.message));
};

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));
