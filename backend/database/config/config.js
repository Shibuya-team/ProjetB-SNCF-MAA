require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		url: process.env.DATABASE_URL,
		dialect: "postgres",
		"use_env_variable": process.env.DATABASE_URL,
	
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		url: process.env.DATABASE_URL,
		dialect: "postgres",
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		url: process.env.DATABASE_URL,
		dialect: "postgres",
		  
	}
	  
};
