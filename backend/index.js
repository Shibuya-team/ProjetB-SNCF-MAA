const express = require("express");
const axios = require("axios");
const app = express();
const axios = require("axios");
const PORT = 5000;
const sequelize = require("./database/config/connect");
const secrets = require("./secrets");
const User = require("./database/models/").User;
const Token = require("./database/models/").Token;
const cors = require("cors");

app.listen(PORT, console.log(`Ecoute sur le port ${PORT}`));

app.use(cors());
app.options("*", cors());

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

// TOKEN
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
			if (result >= 3600) {
				Token.destroy({
					where: {},
				});
			}
		}
	});
	res.sendStatus(200);
});

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
            latitude: 48.8971,
            longitude: 2.3247
          },
          origin: {
            latitude: 48.8599,
            longitude: 2.34093
          }
          // mobilityTypes: ["VEHICLE_WITH_DRIVER", "BUS"],
          // searchDate: "2020-01-31T19:08:20.026Z"
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
            "Content-Type": "application/json",
            "x-api-key": secrets.apiKey
          }
        }
      )
      .then(res => {
        resItinerary = res.data;
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
          "x-api-key": secrets.apiKey,
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
