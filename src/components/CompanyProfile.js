import React, { useState } from "react";
import InputMask from "react-input-mask";

const CompanyProfile = () => {
	// State Variables
	const [companyName, setCompanyName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");
	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ companyName, email, phone, street, city, state, zip });
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
						required
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>

					<label className='block text-white mb-2' htmlFor='email'>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>

					<label className='block text-white mb-2' htmlFor='phone'>
						Phone
					</label>
					<InputMask
						mask='(999) 999-9999'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						required
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>

					{/* Street */}
					<label className='block text-white mb-2' htmlFor='street'>
						Street
					</label>
					<input
						type='text'
						id='street'
						value={street}
						onChange={(e) => setStreet(e.target.value)}
						required
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>

					{/* City */}
					<label className='block text-white mb-2' htmlFor='city'>
						City
					</label>
					<input
						type='text'
						id='city'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>

					{/* State */}
					<label className='block text-white mb-2' htmlFor='state'>
						State
					</label>
					<input
						type='text'
						id='state'
						value={state}
						onChange={(e) => {
							const val = e.target.value.toUpperCase();
							if (/^[A-Z]*$/.test(val)) {
								setState(val);
							}
						}}
						maxLength='2'
						minLength='2'
						required
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>

					{/* Zip */}
					<label className='block text-white mb-2' htmlFor='zip'>
						Zip
					</label>
					<input
						type='text'
						id='zip'
						value={zip}
						onChange={(e) => {
							const val = e.target.value;
							if (/^\d*$/.test(val)) {
								setZip(val);
							}
						}}
						pattern='\d*'
						maxLength='5'
						minLength='5'
						inputMode='numeric'
						required
						className='w-full p-2 mb-4 rounded bg-medium-blue text-white'
					/>

					<button
						type='submit'
						className='w-full p-2 rounded bg-light-orange text-dark-blue'
					>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

export default CompanyProfile;
