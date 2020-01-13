const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const sequelize = require("./database/config/connect");
const secrets = require("./secrets");
const User = require("./database/models/").User;
const Token = require("./database/models/").Token;
const cors = require("cors");

app.use(cors());
app.options("*", cors());

sequelize
	.authenticate()
	.then(() => {
		console.log("La connexion a été établie avec succès.");
	})
	.catch((err) => {
		console.error(
			"Impossible de se connecter à la base de données :",
			err.message,
		);
	});

app.get("/", (req, res) => {
	res.send("Hello Back !");
});

app.get("/user", (req, res) => {
	User.create({
		firstName: "hadibéré",
		lastName: "CAMARA",
		email: "hadibere@gmail.com",
	});
	res.send("User ajoutée");
});

app.get("/getNewToken", async (req, res) => {
	Token.findAll().then(async () => {
		Token.findOrCreate({
			where: {
				token: await getNewToken(),
			},
		});
	});
	res.sendStatus(200);
});

app.get("/api", (req, res) => {
	getNewToken();
	res.sendStatus(200);
});

// Supression TEST //
app.get("/delete", (req, res) => {
	User.destroy({
		where: {},
	});
	res.send("Delete");
});

app.get("/tokend", (req, res) => {
	Token.destroy({
		where: {},
	});
	res.send("Delete");
});

const getNewToken = async () => {
	const token = await axios
		.post(
			"https://auth.maas-dev.aws.vsct.fr/oauth2/token",
			"grant_type=client_credentials&scope=https%3A%2F%2Fapi.maas-dev.aws.vsct.fr%2F.*%2Fsearch.*%3A.*",
			{
				headers: {
					Authorization: secrets.auth,
					"Content-Type": "application/x-www-form-urlencoded",
					"x-api-key": secrets.apiKey,
				},
			},
		)
		.then((res) => {
			const token = res.data.access_token;

			return token;
			//expires_time = Math.floor(Date.now() / 1000) + res.data.expires_in;

			// envoyer ces deux variables dans stockage données : champs : "token" et "token_created_time"
		})
		.catch((err) => console.log(err.message));

	return token;
};

// fonction appelée à chaque fois que le client valide une recherche "itinéraire" ou "around me", pour récupérer son token ou en générer un nouveau
const getToken = () => {
	//let token = User.findAll({ where: { id: mock.userId } }).then((user) => {}); // récupérer champ "token" dans la table "user"
	let expires_time = User.findAll({}); // récupérer champ "token_created_time" dans la table "user"
	if (token === "" || token === null || !token) {
		getNewToken(token, expires_time);
	} else {
		const dateNow = Math.floor(Date.now() / 1000);
		if (dateNow - expires_time >= 0) {
			getNewToken(token, expires_time);
		}
	}
	return token;
};

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));
