import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const apiUrl = process.env.REACT_APP_API_URL;

			const response = await axios.post(`${apiUrl}/user/login`, {
				username,
				password,
			});
			if (response.data.success) {
				localStorage.setItem("token", response.data.token);
				navigate("/builders"); // Navigate to a protected route
			} else {
				// Handle login failure
			}
		} catch (error) {
			console.error("An error occurred while logging in:", error);
		}
	};

	return (
		<div className='flex items-center justify-center h-screen bg-light-blue'>
			<div className='p-8 rounded-lg bg-dark-blue'>
				<form onSubmit={handleSubmit}>
					<label className='block text-white mb-2' htmlFor='username'>
						Username
					</label>
					<input
						type='text'
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>
					<label className='block text-white mb-2' htmlFor='password'>
						Password
					</label>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>
					<button
						type='submit'
						className='w-full p-2 rounded bg-light-orange text-dark-blue'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
