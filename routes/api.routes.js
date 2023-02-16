const router = require('express').Router()


const Location = require('../models/User.model')

router.get("/locations", (req, res, next) => {

    Location
        .find()
        .then(place => res.json(place))
        .catch(err => next(err))
})


module.exports = router