const router = require('express').Router()
const Location = require('../models/User.model')

router.get('/', (req, res, next) => {
    Location
        .find()
        .then(locations => res.render('places/places', { locations }))
        .catch(err => next(err))
})

router.get('/create', (req, res, next) => res.render('places/create-place'))

router.post('/create', (req, res, next) => {
    const { name, type, longitude, latitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Location
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))

})

router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params

    Location
        .findById(id)
        .then(location => res.render('places/edit-place', { location }))
        .catch(err => next(err))

})

router.post('/edit/:id', (req, res, next) => {
    const { name, type, longitude, latitude, id } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Location
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.post('/delete/:id', (req, res, next) => {
    const { id } = req.params

    Location
        .findByIdAndDelete(id)
        .then(() => res.redirect('/locations'))
        .catch(err => next(err))
})

module.exports = router