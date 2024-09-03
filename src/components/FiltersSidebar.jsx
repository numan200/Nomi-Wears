import { useEffect, useState } from "react";

const FiltersSidebar = ({ filterByData }) => {
	const [showCategory, setShowCategory] = useState(false);
	const [activeCategories, setActiveCategories] = useState([]);
	const [activeTypes, setActiveTypes] = useState([]);

	useEffect(() => {
		filterByData({categories: activeCategories, types: activeTypes});
	}, [activeCategories, activeTypes])


	const manageActiveCategories = (e) => {
		// if (newCategories.includes(e.target.value)) {
		// 	newCategories = newCategories.filter(el => el !== e.target.value);
		// } else {
		// 	newCategories = [...activeCategories, e.target.value];
		// }
		const value = e.target.value;
		setActiveCategories(prev => prev.includes(value)? prev.filter(el => el !== value) : [...prev, value]);
	}
	const manageActiveTypes = (e) => {
		// let newTypes;
		// if (activeCategories.length) {
		// 	newTypes = [...activeCategories];
		// } else {
		// 	newTypes = [...activeTypes];
		// }

		const value = e.target.value;
		setActiveTypes(prev => prev.includes(value)? prev.filter(el => el !== value) : [...prev, value]);

		// if (newTypes.includes(e.target.value)) {
		// 	newTypes = newTypes.filter(el => el !== e.target.value);
		// } else {
		// 	newTypes = [...activeTypes, e.target.value];
		// }
		// setActiveTypes(newTypes);
	}

	return (
		<aside className="filters-sidebar col-12 col-md-4 col-lg-3 col-xxl-2">
			{/* Filters for small screens */}
			<h3
				className="small-screen fw-normal fs-4 d-flex align-items-center gap-2 fit-content p-2 trans-3 rounded"
				role="button"
				onClick={() => setShowCategory((prev) => !prev)}
			>
				FILTERS
				<i
					className={`fs-2 mt-1 c-gray bx bxs-chevron-right ${
						showCategory && "active"
					}`}
				></i>
			</h3>

			{/* Filters for large screens */}
			<h3 className="large-screen fw-normal fs-4 d-none mt-2">FILTERS</h3>
			
			{/* Filter using category */}
			<div
				className={`category border rounded p-3 mt-405 ${
					showCategory ? "d-block" : "d-none"
				}`}
			>
				<h4 className="fs-6 mb-205">CATEGORIES</h4>
				<ul className="list-unstyled mb-0">
					<li>
						<input type="checkbox" name="category" id="men" value="Men" onClick={manageActiveCategories} />
						<label className="ps-2 mt-1 fw-light" htmlFor="men">
							Men
						</label>
					</li>
					<li>
						<input type="checkbox" name="category" id="women" value="Women" onClick={manageActiveCategories} />
						<label className="ps-2 mt-1 fw-light" htmlFor="women">
							Women
						</label>
					</li>
					<li>
						<input type="checkbox" name="category" id="kids" value="Kids" onClick={manageActiveCategories} />
						<label className="ps-2 mt-1 fw-light" htmlFor="kids">
							Kids
						</label>
					</li>
				</ul>
			</div>

			{/* Filter using type */}
			<div
				className={`type border rounded p-3 mt-4 ${
					showCategory ? "d-block" : "d-none"
				}`}
			>
				<h4 className="fs-6 mb-205">TYPE</h4>
				<ul className="list-unstyled mb-0">
					<li>
						<input type="checkbox" name="type" id="topwear" value="Topwear" onClick={manageActiveTypes} />
						<label className="ps-2 mt-1 fw-light" htmlFor="topwear">
							Topwear
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="bottomwear" value="Bottomwear" onClick={manageActiveTypes} />
						<label className="ps-2 mt-1 fw-light" htmlFor="bottomwear">
							Bottomwear
						</label>
					</li>
					<li>
						<input type="checkbox" name="type" id="winterwear" value="Winterwear" onClick={manageActiveTypes}/>
						<label className="ps-2 mt-1 fw-light" htmlFor="winterwear">
							Winterwear
						</label>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default FiltersSidebar;
