const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "your-secret-key-here"; // Make sure to use the same secret as in your userRoutes.js

const authMiddleware = (req, res, next) => {
	const token = req.header("x-auth-token");

	if (!token) {
		return res
			.status(401)
			.json({ message: "No token, authorization denied" });
	}

	try {
		const decoded = jwt.verify(token, secret);
		req.user = decoded;
		next();
	} catch (err) {
		res.status(400).json({ message: "Token is not valid" });
	}
};

module.exports = authMiddleware;
