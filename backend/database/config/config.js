require("dotenv").config();

module.exports = {
	development: {
		username: "mmljjgqggjdxwb",
		password: "407d7b1ac03e572466547e787a51814a292c8a089e038c304ddba2a599585dfe",
		database: "d4hkribosg33rj",
		host: "ec2-18-204-232-57.compute-1.amazonaws.com",
		url: process.env.DATABASE_URL,
		dialect: "postgres",
		"use_env_variable": process.env.DATABASE_URL,
	
	},
	test: {
		username: "mmljjgqggjdxwb",
		password: "407d7b1ac03e572466547e787a51814a292c8a089e038c304ddba2a599585dfe",
		database: "d4hkribosg33rj",
		host: "ec2-18-204-232-57.compute-1.amazonaws.com",
		url: process.env.DATABASE_URL,
		dialect: "postgres",
	},
	production: {
		username: "mmljjgqggjdxwb",
		password: "407d7b1ac03e572466547e787a51814a292c8a089e038c304ddba2a599585dfe",
		database: "d4hkribosg33rj",
		host: "ec2-18-204-232-57.compute-1.amazonaws.com",
		url: process.env.DATABASE_URL,
		dialect: "postgres",
		  
	}
	  
};
