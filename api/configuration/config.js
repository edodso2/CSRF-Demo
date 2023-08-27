/**
 * Either add your api key and secret below or create a
 * .demoapirc file, add them there, and RC will automatically
 * load them from the .demoapirc file. 
 */

const config = require("rc")("demoapi", {
  port: 3000,
  callback_url: "http://localhost:3000/auth/facebook/callback",
  facebook_api_key: "",
  facebook_api_secret: "",
});

module.exports = config;
