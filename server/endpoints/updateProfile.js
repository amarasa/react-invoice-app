const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { checkToken } = require("../auth"); // Import your checkToken middleware

router.put("/update", checkToken, async (req, res) => {
	const { username, email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);

	// Update the user details in the database
	// Assuming you have a function updateUserDetails to update the database
	const updateSuccess = await updateUserDetails(
		username,
		email,
		hashedPassword
	);

	if (updateSuccess) {
		res.json({ success: true });
	} else {
		res.status(400).json({ success: false });
	}
});

module.exports = router;
