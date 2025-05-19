import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const  FiltersSidebar = ({ filterByData }) => {
	// State to show/hide category filter (for small screens)
	const [showCategory, setShowCategory] = useState(false);       
	// State for selected categories and types
	const [activeCategories, setActiveCategories] = useState([]);
	const [activeTypes, setActiveTypes] = useState([]);
	const {search} = useContext(ShopContext)

	// Trigger filter function whenever categories or types change
	useEffect(() => {
		filterByData({categories: activeCategories, types: activeTypes});
	}, [activeCategories, activeTypes, search])

	// Toggle selected categories
	const manageActiveCategories = (e) => {
		const value = e.target.value;
		setActiveCategories(prev => prev.includes(value)? prev.filter(el => el !== value) : [...prev, value]);
	}

	// Toggle selected types
	const manageActiveTypes = (e) => {
		const value = e.target.value;
		setActiveTypes(prev => prev.includes(value)? prev.filter(el => el !== value) : [...prev, value]);
	}

	return (
		<aside className="filters-sidebar c-white col-12 col-md-4 col-lg-3 col-xxl-2">
			{/* Toggle button for small screens */}
			<h3
				className="small-screen fw-normal fs-4 d-flex align-items-center gap-2 fit-content p-2 trans-3 rounded"
				role="button"
				aria-expanded={showCategory}
				onClick={() => setShowCategory((prev) => !prev)}
			>
				FILTERS
				<i
					className={`fs-2 mt-1 c-gray bx bxs-chevron-right ${
						showCategory && "active"
					}`}
				></i>
			</h3>

			{/* Filters label for large screens */}
			<h3 className="large-screen fw-normal fs-4 d-none mt-2">FILTERS</h3>
			
			{/* Category filter */}
			<div
				className={`category border rounded p-3 mt-405 ${
					showCategory ? "d-block" : "d-none"
				}`}
			>
				<h4 className="fs-6 c-white mb-205">CATEGORIES</h4>
				<ul className="list-unstyled c-white mb-0">
					{/* <li>
						<input type="checkbox" name="category" id="Men" value="Men" onClick={manageActiveCategories} aria-label="Men category" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Men">
							Men
						</label>
					</li> */}
					<li>
						<input type="checkbox" name="category" id="Plain" value="Plain" onClick={manageActiveCategories} aria-label="Plain category" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Plain">
							Plain
						</label>
					</li>
					<li>
						<input type="checkbox" name="category" id="Printed" value="Printed" onClick={manageActiveCategories} aria-label="Printed category" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Printed">
							Printed
						</label>
					</li>
				</ul>
			</div>

			{/* Type filter */}
			<div
				className={`type border rounded p-3 mt-4 ${
					showCategory ? "d-block" : "d-none"
				}`}
			>
				<h4 className="fs-6 c-white mb-205">TYPE</h4>
				<ul className="list-unstyled c-white mb-0">
					<li>
						<input type="checkbox" name="type" id="Caps" value="Caps" onClick={manageActiveTypes} aria-label="Caps type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Caps">
							Caps
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="t-shirt" value="t-shirt" onClick={manageActiveTypes} aria-label="t-shirt type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="t-shirt">
						   t-shirt
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="polo-shirt" value="polo-shirt" onClick={manageActiveTypes} aria-label="polo-shirt type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="polo-shirt">
							polo-shirt
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="Mugs" value="Mugs" onClick={manageActiveTypes} aria-label="Mugs type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Mugs">
							Mugs
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="Cards" value="Cards" onClick={manageActiveTypes} aria-label="Cards type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Cards">
							Cards
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="Approns" value="Approns" onClick={manageActiveTypes} aria-label="Approns type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Approns">
							Approns
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="Water-Bottle" value="Water-Bottle" onClick={manageActiveTypes} aria-label="Water-Bottle type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="Water-Bottle">
							Water-Bottle
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="keychains" value="keychains" onClick={manageActiveTypes} aria-label="keychains type" />
						<label className="ps-2 mt-1 fw-light" htmlFor="keychains">
							keychains
						</label>
					</li>
					
				</ul>
			</div>
		</aside>
	);
};

export default FiltersSidebar;
