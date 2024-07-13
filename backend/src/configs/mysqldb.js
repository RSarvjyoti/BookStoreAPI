const mysql = require('mysql2');
require('dotenv').config();

const {HOST, USER, DB_PORT, DATABASE, PASSWORD} = process.env

const mysqldb = async () =>{
    try{
        const connection = await mysql.createConnection({
            host: HOST,
            user: USER,
            port: DB_PORT,
            database: DATABASE,
            password: PASSWORD,
        });

        console.log("MySQL connected successfully!");
        return connection;

    }catch(err){
        console.log(err);
    }
}

module.exports = mysqldb;