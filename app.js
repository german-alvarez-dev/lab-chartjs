require("dotenv").config();

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = `Coasters stats!`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const statsRoutes = require("./routes/stats.routes");
app.use("/estadisticas", statsRoutes);

require("./error-handling")(app);

module.exports = app;
