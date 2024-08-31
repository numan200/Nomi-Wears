import { useEffect, useState } from "react";
import MixedAutoSlider from "../components/MixedAutoSlider";
import SubscriptionForm from "../components/SubscriptionForm";
import Features from "../components/Features";
import LatestCollections from "../components/LatestCollections";
import { motion } from "framer-motion";

// Import Slider Images
import homeImage from "../images/hero_img.png";
import conatctImg from "../images/contact_img.webp";
import aboutImg from "../images/about_img.png";

// Import Features Images
import exhangeImg from "../images/download-f.png";
import qualityImg from "../images/quality_icon.png";
import supportImg from "../images/download-set.png";




const Home = ({ onFetchedData }) => {
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
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((json) => {
				setData(json);
				setLoading(false);
			})
			.catch((error) => {
				setErrorInFetch(error);
				setLoading(false);
			});
	}, [onFetchedData]);

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
