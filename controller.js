const { response } = require('express');
const User = require('./model');

// Get all users
const getUsers = (req, res, next) => {
   User.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error })
        });
};

// Add a new user
const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ message: error })
    });
};

// Update a user
const updateUser = (req, res, next) => {
    const { id, name } = req.body;

    User.updateOne({ id: id }, { $set: { name: name } })
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ message: error })
    });
};

// Delete a user
const deleteUser = (req, res, next) => {
    const id = req.body.id; // Fixed typo: req.body.id
    User.deleteOne({ id: id })
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ message: error })
    });
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
