const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const sequelize = require("./database/config/connect");
let token = null;
let expires_in = 0;
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

app.get("/", (req, res) => {
  res.send("Hello Back !");
});

if (token === null) {
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
      expires_in = res.data.expires_in;
    })
    .catch(err => console.log(err.message));
}

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));
