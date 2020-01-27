const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const sequelize = require("./database/config/connect");

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

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));
