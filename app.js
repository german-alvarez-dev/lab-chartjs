// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const express = require("express");
const hbs = require("hbs");
const app = express();
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "lab-coffee-and-booka";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

require("./routes")(app)

require("./error-handling")(app);

module.exports = app;
