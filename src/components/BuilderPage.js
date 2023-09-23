import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const formatDate = (dateString) => {
	const date = new Date(dateString);
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const BuilderPage = () => {
	const [isPaid, setIsPaid] = useState(false);

	const togglePaymentStatus = () => {
		setIsPaid(!isPaid);
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-light-blue'>
			<div className='w-3/4 p-8 rounded-lg bg-dark-blue'>
				<h1 className='text-2xl text-white mb-4'>Builder's Name</h1>
				<button className='bg-light-orange text-dark-blue p-2 rounded mb-4'>
					Add New Invoice
				</button>
				<table className='w-full text-white'>
					<thead>
						<tr>
							<th className='text-left'>Job Address</th>
							<th className='text-left'>Entry Date</th>
							<th className='text-left'>Amount</th>
							<th className='text-left'>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>123 Main St</td>
							<td>{formatDate("2023-09-20")}</td>
							<td>$2000</td>
							<td>
								<FontAwesomeIcon
									icon={faDollarSign}
									className={`${
										isPaid
											? "text-green-500"
											: "text-gray-500"
									} cursor-pointer`}
									onClick={togglePaymentStatus}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BuilderPage;
