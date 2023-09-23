import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/Login";
import CompanyProfile from "./components/CompanyProfile";
import BuildersDashboard from "./components/BuildersDashboard";
import BuilderPage from "./components/BuilderPage";
import InvoicePage from "./components/Invoice";
import Logout from "./components/Logout"; // Import the Logout component
import ProfileSettings from "./components/ProfileSettings"; // Import the Profile Settings component

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/logout' element={<Logout />} />

				<Route
					path='/company-profile'
					element={
						<ProtectedRoute>
							<CompanyProfile />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/builders'
					element={
						<ProtectedRoute>
							<BuildersDashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/builder/:id'
					element={
						<ProtectedRoute>
							<BuilderPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/invoice/:id'
					element={
						<ProtectedRoute>
							<InvoicePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile-settings'
					element={
						<ProtectedRoute>
							<ProfileSettings />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
