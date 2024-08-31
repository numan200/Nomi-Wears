const MixedAutoSlider = ({ activeSlide, images }) => {
	return (
		<section className="mixed-slider">
			{/* Map through images to create slides */}
			{images.map((img, index) => (
				<div
					key={index}
					className={`border-05 p-0 overflow-hidden flex-wrap d-flex ${
						activeSlide == index ? " animateSlide" : "d-none"
					}`}
				>
					{/* Text section for the current slide */}
					<article className="text py-5 m-auto col-12 col-md-6">
						<div className="fit-content m-auto">
							<header className="d-flex align-items-center gap-2 ">
								<span className="fw-bold line-span bg-gray"></span>
								<span className="fw-bold c-gray">OUR BESTSELLERS</span>
							</header>
							<h2 className="playflair-font fs-big my-3 playflair-l-font">
								Latest Arrivals
							</h2>
							<footer className="d-flex align-items-center gap-2 ">
								<button
									className="btn fit-content fw-bold c-gray p-0"
									role="button"
								>
									SHOP NOW
								</button>
								<span className="fw-bold line-span bg-gray"></span>
							</footer>
						</div>
					</article>
					{/* Image section for the current slide */}
					<img className="col-12 col-md-6 d-block mh-450" src={img} alt="" />
				</div>
			))}
		</section>
	);
};

export default MixedAutoSlider;
