// server with express
const express = require('express');
// ORM
const { Sequelize } = require('sequelize');
// Routers
const { usersRouter } = require('./routes/users.routes');
const { postsRouter } = require('./routes/posts.routes');

const app = express();

// Endpoint
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/posts', postsRouter);

// Enable incoming JSON data
app.use(express.json());

// CONECT to DB
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres1234',
    database: 'postgreSQL',
    port: 5432
});

db.authenticate()
    .then(() => console.log('database authenticated'))
    .catch(err => console.log(err));

const PORT = 3000;

app.listen(PORT, () => {
        console.log(`Express running in new PORT ${PORT}`)
});
