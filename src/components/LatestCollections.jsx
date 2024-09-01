import HeaderDashed from "./HeaderDashed";
import FetchWaitingMsg from "./FetchWaitingMsg";
import FetchErrorMsg from "./FetchErrorMsg";
import CollectionCard from "./CollectionCard";

const LatestCollections = ({ data, loading, errorInFetch }) => {
	return (
		<section className="latest-collections mt-6">
			{/* Header with title and description */}
			<HeaderDashed
				head1="LATEST"
				head2="COLLECTIONS"
				paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
			/>
			<main className="d-flex row-gap-3 flex-wrap mt-5">
				{/* Conditional rendering based on loading and error states */}
				{loading ? (
					<FetchWaitingMsg />
				) : errorInFetch ? (
					<FetchErrorMsg />
				) : (
					// Sort data by id and display the first 10 items
					data.sort((a,b) => {
						a = a.id;
						b = b.id;
						return a > b? 1 : a < b? -1 : 0
					}).slice(0,10).map((product) => (
							<CollectionCard key={product._id} data={product} />
						))
				)}
			</main>
		</section>
	);
};

export default LatestCollections;
