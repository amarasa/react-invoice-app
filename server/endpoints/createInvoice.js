const express = require("express");
const db = require("../connection");

const router = express.Router();

router.post("/", (req, res) => {
	const { description, amount } = req.body;
	db.query(
		`INSERT INTO invoices (description, amount) VALUES ('${description}', ${amount})`,
		(err, results) => {
			if (err) throw err;
			res.json({ id: results.insertId });
		}
	);
});

module.exports = router;
