// Import Slider Images
import slide_1_img from "../assets/nomiwear-5panel-cap.png";
import slide_2_img from "../assets/nomiwear-black-appron.png";
import slide_3_img from "../assets/nomiwear-black-mug3.png";
import slide_4_img from "../assets/nomiwear-black.png";
import slide_5_img from "../assets/nomiwear-bottle.png";
import slide_6_img from "../assets/nomiwear-card-front.png";
import slide_7_img from "../assets/nomiwear-face-gray-cap.png";
import slide_8_img from "../assets/nomiwear-polo.png";
import slide_9_img from "../assets/nomiwear-skin-appron.png";
import slide_10_img from "../assets/nomiwear-skin-tshirt.png";
import slide_11_img from "../assets/nomiwearpolo.png";
import { useEffect, useState } from "react";

const MixedAutoSlider = () => {
	const sliderImages = [slide_9_img, slide_7_img, slide_8_img, slide_1_img, slide_2_img, slide_3_img, slide_4_img, slide_5_img, slide_6_img, slide_10_img, slide_11_img];
	const [activeSlide, setActiveSlide] = useState(0);

	// Auto-slide functionality for the image slider
	useEffect(() => {
		const slideInterval = setInterval(() => {
			setActiveSlide((prev) => {
				return prev >= sliderImages.length - 1 ? 0 : prev + 1;
			});
		}, 2500);

		return () => clearInterval(slideInterval); // Cleanup interval on unmount
	}, [sliderImages.length]);

	return (
		<section className="mixed-slider my-5 ">
			{/* Map through images to create slides */}
			<div className="border-05 p-0 overflow-hidden flex-wrap rounded-5  d-flex">
				{/* Text section for the current slide */}
				<article className="text py-5 m-auto col-12 col-md-6">
					<div className="fit-content m-auto">
						<header className="d-flex align-items-center gap-2 ">
							<span className="fw-bold line-span bg-gray"></span>
							<span className="fw-bold c-gray">Printed Advertisment with</span>
						</header>
						<h2 className="playflair-font fs-big my-3 c-white playflair-l-font">
							Customized design
						</h2>
						<footer className="d-flex align-items-center gap-2 ">
							<button
								className="btn fit-content fw-bold c-gray p-0"
								role="button"
							>
								Order Now
							</button>
							<span className="fw-bold line-span bg-gray"></span>
						</footer>
					</div>
				</article>
				{/* Image section for the current slide */}
				{sliderImages.map((img, index) => (
					<img
						key={index}
						className={`col-12 col-md-6 d-block mh-450 d-block ${
							activeSlide == index ? " animateSlide" : "d-none"
						}`}
						src={img}
						alt="One of the latest arrivals products"
					/>
				))}
			</div>
		</section>
	);
};

export default MixedAutoSlider;
