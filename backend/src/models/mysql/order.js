const mysqldb = require("../../configs/mysqldb")

const orderModel = async () =>{
    const connection = await mysqldb();
    
    if(connection) {

        await connection.promise().query(`
            CREATE TABLE IF NOT EXISTS \`Order\` (
                id INT AUTO_INCREMENT PRIMARY KEY,
                customer_id INT NOT NULL,
                order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status ENUM('pending', 'completed', 'canceled') DEFAULT 'pending',
                FOREIGN KEY (customer_id) REFERENCES Customer(id)
            );
        `);
        console.log("Schemas created successfully!");
        connection.end();

    }
    
}

orderModel().catch(err => console.error("Error creating schemas:", err));

module.exports = orderModel;

