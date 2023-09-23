const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
	host: "localhost",
	user: "root", // your MySQL username
	password: "", // your MySQL password
	database: "invoice_db", // your database name
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

// Export the pool for use in other files
module.exports = pool.promise();
