var db = {
	rg: {
		DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
		DATABASE_NAME: process.env.DATABASE_NAME || "serveit",
		DATABASE_USERNAME: process.env.DATABASE_USERNAME || "postgres",
		DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "kani",
		DATABASE_PORT: process.env.DATABASE_PORT || 5432,
		DATABASE_DIALECT: process.env.DATABASE_DIALECT || "postgres",
		NODE_ENV: process.env.NODE_ENV || "development",
		SCHEMA: "public",
	},
};

var config = {
	dialect: "postgres",
	app: {
		jwtKey: "insert-a-secret-key-here",
		sessionKey: "SecretSessionKey",
		port: process.env.PORT || "4192",
		name: "generic Services API Platform",
		local_domain: "http://localhost:" + (process.env.PORT || "4192") + "/api/v1",
	},

	db: {
		env: db.rg,
	},
};

module.exports = config;

// To convert js config to json
if (require.main == module) {
	var fs = require("fs");
	var path = require("path");

	console.log("The current config is \n\n\n");

	var config_string = JSON.stringify(config, null, 4);
	console.log(config_string);
	console.log("\n\n\n");

	// Write the config string to a file here, most preferably app_config.json
	var file_path = path.join(__dirname, "app_config.json");
	console.log("Saving the config file at:  " + file_path);
	console.log("\n\n\n");

	// fs.writeFile(file_path, config_string, function (err) {
	//     if (err) {
	//         console.log("There is an error in writing the data to the file");
	//         console.log(err);
	//     } else {
	//         console.log('config file saved');
	//     }
	// });
}
