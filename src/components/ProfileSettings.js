import React, { useState, useEffect } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const ProfileSettings = () => {
	const [companyName, setCompanyName] = useState("");
	const [ownerName, setOwnerName] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const apiUrl = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${apiUrl}/company-profile`);
				if (response.data.success) {
					const { company_name, owner_name, phone, address } =
						response.data.profile;
					setCompanyName(company_name);
					setOwnerName(owner_name);
					setAddress(address);
					setPhoneNumber(phone);
				}
			} catch (error) {
				console.error(
					"An error occurred while fetching the profile:",
					error
				);
			}
		};
		fetchData();
	}, []);

	const handleCloseSnackbar = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackbar(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${apiUrl}/company-profile/update`,
				{
					company_name: companyName,
					owner_name: ownerName,
					address,
					phone: phoneNumber,
				}
			);
			if (response.data.success) {
				setOpenSnackbar(true);
			}
		} catch (error) {
			console.error(
				"An error occurred while updating the profile:",
				error
			);
		}
	};

	return (
		<div className='flex items-center justify-center h-screen bg-light-blue'>
			<div className='p-8 rounded-lg bg-dark-blue'>
				<form onSubmit={handleSubmit}>
					<label
						className='block text-white mb-2'
						htmlFor='companyName'
					>
						Company Name
					</label>
					<input
						type='text'
						id='companyName'
						value={companyName}
						onChange={(e) => setCompanyName(e.target.value)}
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>
					<label
						className='block text-white mb-2'
						htmlFor='ownerName'
					>
						Owner Name
					</label>
					<input
						type='text'
						id='ownerName'
						value={ownerName}
						onChange={(e) => setOwnerName(e.target.value)}
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>
					<label className='block text-white mb-2' htmlFor='address'>
						Address
					</label>
					<input
						type='text'
						id='address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>
					<label
						className='block text-white mb-2'
						htmlFor='phoneNumber'
					>
						Phone Number
					</label>
					<input
						type='text'
						id='phoneNumber'
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>
					<button
						type='submit'
						className='w-full p-2 rounded bg-light-orange text-dark-blue'
					>
						Update Profile
					</button>
				</form>

				{/* Snackbar */}
				<Snackbar
					open={openSnackbar}
					autoHideDuration={1500}
					onClose={handleCloseSnackbar}
					message='Profile updated successfully!'
				/>
			</div>
		</div>
	);
};

export default ProfileSettings;
