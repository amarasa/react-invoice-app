const mysql = require("mysql2/promise");

let db;

async function connectDatabase() {
	if (!db) {
		db = await mysql.createConnection({
			host: "127.0.0.1",
			port: 3306,
			user: "root",
			password: "",
			database: "InvoiceDB",
		});
	}
	return db;
}

async function queryDatabase(sql, params) {
	const connection = await connectDatabase();
	const [results] = await connection.query(sql, params);
	return results;
}

module.exports = queryDatabase;
