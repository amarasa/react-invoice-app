const express = require("express");
const router = express.Router();
const queryDatabase = require("../connection"); // Importing queryDatabase function from connection.js

// Fetch existing profile data
router.get("/", async (req, res) => {
	try {
		const query = "SELECT * FROM CompanyProfile LIMIT 1";
		const rows = await queryDatabase(query);
		if (rows.length > 0) {
			res.json({ success: true, profile: rows[0] });
		} else {
			res.json({ success: false, message: "No profile found" });
		}
	} catch (error) {
		console.error("Error fetching profile:", error);
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
});

// Update profile data
router.post("/update", async (req, res) => {
	try {
		const { company_name, owner_name, phone, address } = req.body;
		const query =
			"UPDATE CompanyProfile SET company_name = ?, owner_name = ?, phone = ?, address = ? WHERE profile_id = 1";
		await queryDatabase(query, [company_name, owner_name, phone, address]);
		res.json({ success: true, message: "Profile updated successfully" });
	} catch (error) {
		console.error("Error updating profile:", error);
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
});

module.exports = router;
