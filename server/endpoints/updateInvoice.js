const express = require("express");
const db = require("../connection");

const router = express.Router();

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { description, amount } = req.body;
	db.query(
		`UPDATE invoices SET description = '${description}', amount = ${amount} WHERE id = ${id}`,
		(err, results) => {
			if (err) throw err;
			res.json({ message: "Invoice updated" });
		}
	);
});

module.exports = router;
