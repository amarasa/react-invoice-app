import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const BuildersDashboard = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-light-blue'>
			<div className='p-8 md:rounded-lg bg-dark-blue w-full md:w-3/4'>
				<h1 className='text-2xl text-white mb-4'>Builders Dashboard</h1>
				<div className='grid grid-cols-3 gap-4 text-white'>
					<div className='font-bold'>Builder's Company Name</div>
					<div className='font-bold'>Total Invoices</div>
					<div className='font-bold'>Edit</div>
					{/* Sample Row */}
					<div>
						<span className='cursor-pointer hover:text-light-orange'>
							Builder 1
						</span>
					</div>
					<div>5</div>
					<div>
						<button className='hover:text-light-orange'>
							<FontAwesomeIcon icon={faPencilAlt} />
						</button>
					</div>
					{/* Sample Row */}
					<div>
						<span className='cursor-pointer hover:text-light-orange'>
							Builder 2
						</span>
					</div>
					<div>3</div>
					<div>
						<button className='hover:text-light-orange'>
							<FontAwesomeIcon icon={faPencilAlt} />
						</button>
					</div>
				</div>
				<button className='p-2 mt-4 rounded bg-light-orange text-dark-blue'>
					Add New Builder
				</button>
			</div>
		</div>
	);
};

export default BuildersDashboard;
