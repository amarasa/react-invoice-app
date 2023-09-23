const express = require("express");
const db = require("../connection");

const router = express.Router();

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	db.query(`DELETE FROM invoices WHERE id = ${id}`, (err, results) => {
		if (err) throw err;
		res.json({ message: "Invoice deleted" });
	});
});

module.exports = router;
