const mysqldb = require("../../configs/mysqldb")

const orderItem = async () =>{
    const connection = await mysqldb();
    
    if(connection) {

        await connection.promise().query(`
            CREATE TABLE IF NOT EXISTS OrderItem (
                id INT AUTO_INCREMENT PRIMARY KEY,
                order_id INT NOT NULL,
                book_id VARCHAR(24) NOT NULL,
                quantity INT NOT NULL,
                FOREIGN KEY (order_id) REFERENCES \`Order\`(id)
            );
        `);

        console.log("Schemas created successfully!");
        connection.end();
    }
    
}

orderItem().catch(err => console.error("Error creating schemas:", err));

module.exports = orderItem;

