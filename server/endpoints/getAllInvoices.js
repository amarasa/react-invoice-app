const express = require("express");
const db = require("../connection");

const router = express.Router();

router.get("/", (req, res) => {
	db.query("SELECT * FROM invoices", (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

module.exports = router;
