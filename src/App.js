import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CompanyProfile from "./components/CompanyProfile";
import BuildersDashboard from "./components/BuildersDashboard";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/company-profile' element={<CompanyProfile />} />
				<Route path='/builders' element={<BuildersDashboard />} />

				{/* Add more routes here as needed */}
			</Routes>
		</Router>
	);
}

export default App;
