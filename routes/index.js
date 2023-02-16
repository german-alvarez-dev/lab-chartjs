module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes)

    const locationRoutes = require("./location.routes");
    app.use("/locations", locationRoutes)

    const apiRoutes = require('./api.routes')
    app.use('/api', apiRoutes)
}

