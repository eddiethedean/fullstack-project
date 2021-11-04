require('dotenv').config()
const token = process.env.elephant
const Pool = require("pg").Client;
const creds = new Pool(token);

module.exports = creds;