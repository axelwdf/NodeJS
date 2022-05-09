const {users} = require('../models/user.model')

const getUsers = (req, res) => {
    res.status(200).json({ users });
}

const postUsers = (req, res) =>{
    const {name} = req.body;

    const newUser = {
        id: Math.floor(Math.random() * 10),
        name,
    };

    users.push(newUser);

    res.status(201).json({ newUser });
}

module.exports = {postUsers, getUsers}