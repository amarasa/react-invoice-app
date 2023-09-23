require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Import endpoint routers
const getAllInvoices = require("./server/endpoints/getAllInvoices");
const getSingleInvoice = require("./server/endpoints/getSingleInvoice");
const createInvoice = require("./server/endpoints/createInvoice");
const updateInvoice = require("./server/endpoints/updateInvoice");
const deleteInvoice = require("./server/endpoints/deleteInvoice");
const userRoutes = require("./server/endpoints/userRoutes");
const authMiddleware = require("./server/authMiddleware"); // Import the middleware
const companyProfile = require("./server/endpoints/companyProfile");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use endpoint routers
app.use("/api/invoices", authMiddleware, getAllInvoices); // Add middleware here
app.use("/api/invoice", authMiddleware, getSingleInvoice); // And here
app.use("/api/invoice/create", authMiddleware, createInvoice); // And so on...
app.use("/api/invoice/update", authMiddleware, updateInvoice);
app.use("/api/invoice/delete", authMiddleware, deleteInvoice);
app.use("/api/user", userRoutes);
app.use("/api/company-profile", companyProfile);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
