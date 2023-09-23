const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../connection");

const secret = process.env.JWT_SECRET;

// Function to generate JWT token
const generateToken = (user) => {
	return jwt.sign(user, secret, {
		expiresIn: "1h",
	});
};

// Login Route
router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const [rows] = await db
			.promise()
			.query("SELECT * FROM users WHERE username = ?", [username]);
		const user = rows[0];

		if (!user) {
			return res
				.status(401)
				.json({
					success: false,
					message: "Invalid username or password",
				});
		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return res
				.status(401)
				.json({
					success: false,
					message: "Invalid username or password",
				});
		}

		const token = generateToken({ username: user.username });
		res.json({ success: true, token });
	} catch (error) {
		console.error("Error during login:", error);
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
});

module.exports = router;
