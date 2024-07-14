const mysqldb = require("../../configs/mysqldb")

const customerModel = async () =>{
    const connection = await mysqldb();
    
    if(connection) {

        await connection.promise().query(`
            CREATE TABLE IF NOT EXISTS Customer (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role ENUM('customer', 'admin') DEFAULT 'customer'
            );
        `);
        console.log("Schemas created successfully!");
        connection.end();

    }
    
}

customerModel().catch(err => console.error("Error creating schemas:", err));

module.exports = customerModel;

