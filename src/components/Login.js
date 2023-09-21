import React, { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// For now, let's just log the username and password
		console.log(`Username: ${username}, Password: ${password}`);
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
