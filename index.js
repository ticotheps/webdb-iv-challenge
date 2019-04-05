const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const server = express();

server.use(helmet());
server.use(express.json());

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`\n***Web-DB-IV-Challenge API running on http://localhost${port}***\n`);
});