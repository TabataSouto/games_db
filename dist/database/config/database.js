"use strict";
require("dotenv/config");
const config = {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: Number(process.env.MYSQLPORT) || 3306,
    dialect: 'mysql',
};
module.exports = config;
