const express = require("express");
const app = express();
const axios = require("axios");
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

app.get("/getNewToken", async (req, res) => {
	Token.findOne({}).then(async (tokenCreate) => {
		if (!tokenCreate) {
			Token.create({
				token: await getNewToken(),
			});
		}

		if (tokenCreate && tokenCreate.createdAt) {
			const result = Math.round(
				(Date.now() - Date.parse(tokenCreate.createdAt)) / 1000,
			);
			console.log(result);
			if (result >= 200) {
				Token.destroy({
					where: {},
				});
			}
		}
	});
	res.sendStatus(200);
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
			return res.data.access_token;
		})
		.catch((err) => console.log(err.message));

	return token;
};

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));
