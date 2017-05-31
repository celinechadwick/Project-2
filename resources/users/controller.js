// const db = require("../../config/database");
const User = require("../../models/user");

let controller = {};

controller.index = (req, res) => {
    //Logic to show all users
    User
    .findAll()
    .then((users_data) => {
        res.render("users.ejs", {
            users: users_data
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

controller.create = (req, res) => {
    //Note: I will write logic here to save a user to the DB using the User model

    User
    .create(req.body.user)
    .then(() => {
        res.redirect("/users");
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = controller;
