const express = require("express");
const db = require("../connection");

const router = express.Router();

router.get("/:id", (req, res) => {
	const { id } = req.params;
	db.query(`SELECT * FROM invoices WHERE id = ${id}`, (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

module.exports = router;
