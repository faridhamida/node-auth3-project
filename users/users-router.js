const router = require('express').Router();

const Users = require('../users/routes-model');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    Users.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
});

module.exports = router; 