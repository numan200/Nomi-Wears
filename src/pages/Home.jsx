import { useEffect, useState } from "react";
import MixedAutoSlider from "../components/MixedAutoSlider";
import SubscriptionForm from "../components/SubscriptionForm";
import Features from "../components/Features";
import LatestCollections from "../components/LatestCollections";
import { motion } from "framer-motion";

// Import Slider Images
import homeImage from "../assets/hero_img.png";
import conatctImg from "../assets/contact_img.webp";
import aboutImg from "../assets/about_img.png";

// Import Features Images
import exhangeImg from "../assets/download-f.png";
import qualityImg from "../assets/quality_icon.png";
import supportImg from "../assets/download-set.png";



// Dummy Fixed Data:
import productsData from "../components/FixedData";


const Home = () => {
	const sliderImages = [homeImage, conatctImg, aboutImg];
	const [activeSlide, setActiveSlide] = useState(0);
	const [loading, setLoading] = useState(true);
	const [errorInFetch, setErrorInFetch] = useState(null);
	const [data, setData] = useState([]);
	const featuresImgs = [exhangeImg, qualityImg, supportImg];



	// Auto-slide functionality for the image slider
	useEffect(() => {
		const slideInterval = setInterval(() => {
			setActiveSlide((prev) => {
				return prev >= 2 ? 0 : prev + 1;
			});
		}, 2500);

		return () => clearInterval(slideInterval);      // Cleanup interval on unmount
	}, []);

	// Fetch data for collections
	useEffect(() => {
		// fetch("https://ahmed-maher77.github.io/Forever__Modern-E-Commerce-Web-Application-with-ReactJS-and-Bootstrap/db.json/products")      // http://localhost:3000/products
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		console.log('from github server', json);
				
		// 		setData(json);
		// 		setLoading(false);
		// 	})
		// 	.catch((error) => {
		// 		setErrorInFetch(error);
		// 		setLoading(false);
		// 	});
		setData(productsData);
		setLoading(false);
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="home-page text-center"
		>
			<div className="container">
				{/* Image Slider */}

				<MixedAutoSlider activeSlide={activeSlide} images={sliderImages} />

				{/* Collections */}
				<LatestCollections
					data={data}
					loading={loading}
					errorInFetch={errorInFetch}
				/>

				{/* Features */}
				<Features imgs={featuresImgs} />

				{/* Subscription Form */}
				<SubscriptionForm />
			</div>
		</motion.section>
	);
};

export default Home;
