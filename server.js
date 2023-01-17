const http = require('http');
const express = require('express');
const { Client } = require('pg');

const app = express();
const client = new Client({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});
client.connect();

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name } = req.body;
    client.query('INSERT INTO users (name) VALUES ($1)', [name], (err, result) => {
        if (err) throw err;
        res.json({ name });
    });
});

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
