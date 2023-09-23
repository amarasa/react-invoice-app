import axios from "axios";

export const getCompanyProfile = async () => {
	try {
		const response = await axios.get("/api/getCompanyProfile");
		return response.data;
	} catch (error) {
		console.error("Error fetching company profile:", error);
		return null;
	}
};
