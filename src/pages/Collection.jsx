import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import AllCollections from "../components/AllCollections";


// Dummy Fixed Data:
import productsData from "../components/FixedData";


const Collection = () => {
	// State to store fetched data
	const [filteredData, setFilteredData] = useState([]);
	// State to manage loading status
	// const [loading, setLoading] = useState(true);
	// State to handle fetch errors
	// const [errorInFetch, setErrorInFetch] = useState(null);

	const filterByData = ({categories, types}) => {
		let newData = [...productsData];
		if (categories.length) {
			newData = newData.filter(el => categories.includes(el.category));
		}
		if (types.length) {
			newData = newData.filter(el => types.includes(el.subCategory));
		}
		

		// newData = productsData.filter(el => filterBy.includes(el.category));
		setFilteredData(newData);
		console.log(newData);
		
		// console.log('from parent', filterData);
	}



	// Fetch data on component mount
	useEffect(() => {
		// fetch("https://ahmed-maher77.github.io/Forever__Modern-E-Commerce-Web-Application-with-ReactJS-and-Bootstrap/db.json")
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		setData(json);              // Store fetched data
		// 		setLoading(false);          // Stop loading once data is fetched
		// 	}).catch(error => {
		// 		setErrorInFetch(error);     // Handle any errors in fetching
		// 		setLoading(false);          // Stop loading even if there's an error
		// 	})
		// setData(productsData);
		// setLoading(false);
	}, []);




	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="collection-page py-3 pt-5"
		>
			<div className="container">
				<div className="row row-gap-4">
					{/* Sidebar with filters */}
					<FiltersSidebar filterByData={filterByData} />

					{/* Display all collections with the fetched data */}
					<div className="col-12 col-md-8 col-lg-9 col-xxl-10 position-relative">
					{
						filteredData.length?
						<AllCollections data={ filteredData} />:
						<p className="nomatch-msg position-absolute top-50 start-50 fs-3 text-center">There are no data match your choice 🙄</p>
					}
						
					</div>
					{/* <AllCollections data={data} loading={loading} errorInFetch={errorInFetch} /> */}
				</div>
			</div>
		</motion.div>
	);
};

export default Collection;
