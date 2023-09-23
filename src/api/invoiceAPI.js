import axios from "axios";

export const getAllInvoices = async () => {
	try {
		const response = await axios.get("/api/getAllInvoices");
		return response.data;
	} catch (error) {
		console.error("Error fetching all invoices:", error);
		return null;
	}
};

export const getInvoiceById = async (id) => {
	try {
		const response = await axios.get(`/api/getInvoiceById/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching invoice by ID ${id}:`, error);
		return null;
	}
};
