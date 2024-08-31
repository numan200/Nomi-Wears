import { useState } from "react";

const FiltersSidebar = () => {
	const [activeFilter, setActiveFilter] = useState(false);

	return (
		<aside className="col-12 col-md-4 col-lg-3 col-xxl-2">
			{/* Filters for small screens */}
			<h3
				className="small-screen fw-normal fs-4 d-flex align-items-center gap-2 fit-content p-2 trans-3 rounded"
				role="button"
				onClick={() => setActiveFilter((prev) => !prev)}
			>
				FILTERS
				<i
					className={`fs-2 mt-1 c-gray bx bxs-chevron-right ${
						activeFilter && "active"
					}`}
				></i>
			</h3>

			{/* Filters for large screens */}
			<h3 className="large-screen fw-normal fs-4 d-none mt-2">FILTERS</h3>
			
			{/* Filter using category */}
			<div
				className={`category border rounded p-3 mt-405 ${
					activeFilter ? "d-block" : "d-none"
				}`}
			>
				<h4 className="fs-6 mb-205">CATEGORIES</h4>
				<ul className="list-unstyled mb-0">
					<li>
						<input type="checkbox" name="gategory" id="men" />
						<label className="ps-2 mt-1 fw-light" htmlFor="men">
							Men
						</label>
					</li>
					<li>
						<input type="checkbox" name="gategory" id="women" />
						<label className="ps-2 mt-1 fw-light" htmlFor="women">
							Women
						</label>
					</li>
					<li>
						<input type="checkbox" name="gategory" id="kids" />
						<label className="ps-2 mt-1 fw-light" htmlFor="kids">
							Kids
						</label>
					</li>
				</ul>
			</div>

			{/* Filter using type */}
			<div
				className={`type border rounded p-3 mt-4 ${
					activeFilter ? "d-block" : "d-none"
				}`}
			>
				<h4 className="fs-6 mb-205">TYPE</h4>
				<ul className="list-unstyled mb-0">
					<li>
						<input type="checkbox" name="gategory" id="topwear" />
						<label className="ps-2 mt-1 fw-light" htmlFor="topwear">
							Topwear
						</label>
					</li>
					<li>
						<input type="checkbox" name="gategory" id="bottomwear" />
						<label className="ps-2 mt-1 fw-light" htmlFor="bottomwear">
							Bottomwear
						</label>
					</li>
					<li>
						<input type="checkbox" name="gategory" id="winterwear" />
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
