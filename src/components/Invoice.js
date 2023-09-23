import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencilAlt,
	faTrash,
	faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { getAllInvoices, getInvoiceById } from "../api/invoiceAPI";
import { getCompanyProfile } from "../api/companyProfileAPI";

const InvoicePage = () => {
	const [lineItems, setLineItems] = useState([]);
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState("");
	const [rate, setRate] = useState("");
	const [type, setType] = useState("Each");
	const [companyProfile, setCompanyProfile] = useState({});

	useEffect(() => {
		const fetchCompanyProfile = async () => {
			const profile = await getCompanyProfile(); // Use the API function
			setCompanyProfile(profile);
		};
		fetchCompanyProfile();
	}, []);

	const handlePrint = () => {
		window.print();
	};

	const handleAddItem = () => {
		if (description && quantity && rate) {
			setLineItems([...lineItems, { description, quantity, rate, type }]);
			setDescription("");
			setQuantity("");
			setRate("");
		}
	};

	const handleEditItem = (index) => {
		const itemToEdit = lineItems[index];
		setDescription(itemToEdit.description);
		setQuantity(itemToEdit.quantity);
		setRate(itemToEdit.rate);
		setType(itemToEdit.type);
		handleDeleteItem(index);
	};

	const handleDeleteItem = (index) => {
		const updatedItems = [...lineItems];
		updatedItems.splice(index, 1);
		setLineItems(updatedItems);
	};

	const calculateCost = (quantity, rate, type) => {
		let cost = 0;
		const numQuantity = parseFloat(quantity);
		const numRate = parseFloat(rate);

		if (type === "each") {
			cost = numQuantity * numRate;
		} else if (type === "sq foot") {
			cost = numQuantity * numRate;
		} else if (type === "per thousand") {
			cost = (numQuantity / 1000) * numRate;
		}
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(cost);
	};

	const getTotalCost = () => {
		const total = lineItems.reduce((total, item) => {
			const cost = parseFloat(
				calculateCost(item.quantity, item.rate, item.type).replace(
					/[^0-9.-]+/g,
					""
				)
			);
			return total + cost;
		}, 0);
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(total);
	};
	return (
		<div className='p-8 bg-light-blue'>
			<div className='mb-8'>
				<div className='bg-dark-blue p-4 rounded-t'>
					<div className='flex justify-between'>
						<div>
							<h1 className='text-white text-lg'>
								{companyProfile.companyName ||
									"Salvo Masonry Inc."}
							</h1>
							<p className='text-white'>
								{companyProfile.ownerName || "Salvatore Marasa"}
							</p>
							<p className='text-white'>
								{companyProfile.phone || "(734)777-5759"}
							</p>
							<p className='text-white'>
								{companyProfile.address ||
									"33076 Mallard Dr. Brownstown, MI 48173"}
							</p>
						</div>
						<div>
							<h1 className='text-white text-lg'>
								[Builder Company name]
							</h1>
							<p className='text-white'>[Builder Phone]</p>
							<p className='text-white'>
								[Builder office address]
							</p>
							<hr className='my-2 border-white' />
							<p className='text-white'>[Job Address]</p>
						</div>
					</div>
				</div>
				<table className='min-w-full bg-white rounded-b'>
					<thead>
						<tr>
							<th className='text-left py-2 px-4'>Description</th>
							<th className='text-left py-2 px-4'>Quantity</th>
							<th className='text-left py-2 px-4'>Rate</th>
							<th className='text-left py-2 px-4'>Cost</th>
							<th className='text-left py-2 px-4'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{lineItems.map((item, index) => (
							<tr key={index}>
								<td className='py-2 px-4'>
									{item.description}
								</td>
								<td className='py-2 px-4'>
									{Number(item.quantity).toLocaleString(
										"en-US"
									)}
								</td>

								<td className='py-2 px-4'>{`${new Intl.NumberFormat(
									"en-US",
									{
										style: "currency",
										currency: "USD",
									}
								).format(item.rate)} / ${item.type}`}</td>

								<td className='py-2 px-4'>
									{calculateCost(
										item.quantity,
										item.rate,
										item.type
									)}
								</td>
								<td className='py-2 px-4'>
									<button
										className='text-orange-500 hover:text-orange-700'
										onClick={() => handleEditItem(index)}
									>
										<FontAwesomeIcon icon={faPencilAlt} />
									</button>
									<button
										className='text-red-500 hover:text-red-700 ml-2'
										onClick={() => handleDeleteItem(index)}
									>
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td
								colSpan='3'
								className='font-bold text-right py-2 px-4'
							>
								Total:
							</td>
							<td className='py-2 px-4 font-bold'>
								{getTotalCost()}
							</td>
							<td></td>
						</tr>
					</tfoot>
				</table>
				<div className='flex items-center mt-4'>
					<input
						type='text'
						placeholder='Description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className='p-2 rounded border'
					/>
					<input
						type='number'
						placeholder='Quantity'
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						className='p-2 rounded border ml-2'
					/>
					<input
						type='number'
						placeholder='Rate'
						value={rate}
						onChange={(e) => setRate(e.target.value)}
						className='p-2 rounded border ml-2'
					/>
					<select
						value={type}
						onChange={(e) => setType(e.target.value)}
						className='p-2 rounded border ml-2'
					>
						<option value='each'>Each</option>
						<option value='per thousand'>Per Thousand</option>
						<option value='sq foot'>Sq Foot</option>
					</select>
					<button
						onClick={handleAddItem}
						className='p-2 rounded bg-light-orange text-dark-blue ml-2'
					>
						Add Item
					</button>
				</div>
			</div>
			<div className='flex justify-end'>
				<button
					onClick={handlePrint}
					className='p-2 rounded bg-light-orange text-dark-blue ml-2 hover:text-orange-700'
				>
					<FontAwesomeIcon icon={faPrint} />
				</button>
			</div>
		</div>
	);
};

export default InvoicePage;
