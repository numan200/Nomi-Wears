import CollectionCard from "./CollectionCard";
// import FetchErrorMsg from "./FetchErrorMsg";
import FetchWaitingMsg from "./FetchWaitingMsg";
import HeaderDashed from "./HeaderDashed";

const AllCollections = ({ data }) => {
// const AllCollections = ({ data, errorInFetch }) => {
	// console.log(data);
	
	return (
		<section id="all-collections">
			<header className="d-flex justify-content-between align-items-center">
				<HeaderDashed head1="ALL" head2="COLLECTIONS" />
				
				{/* Sorting options dropdown */}
				<select
					className="text-center border-2 border-l-gray outline-0 py-2 fs-small cursor"
					
				>
					<option value="default">Sort by: Relevant</option>
					<option value="low-high">Sort by: Low to High</option>
					<option value="high-low">Sort by: High to Low</option>
				</select>
			</header>

			{/* Product display section */}
			<section className="mt-3">
				<div className="row row-gap-4">
					{!data.length ? (
						<FetchWaitingMsg />                 // Show loading message
					)                  // Show error message if fetch fails
					: (
						data.map((product, i) => (
							<div className="col-6 col-lg-4 col-xl-3" key={i}>
								<CollectionCard data={product} />
							</div>
						))
					)}
				</div>
			</section>
		</section>
	);
};

export default AllCollections;
