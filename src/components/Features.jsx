import SingleFeature from "./SingleFeature";

const Features = ({ imgs }) => {
	return (
		<section className="features d-flex flex-wrap text-center gap-5 column-gap-3 column-gap-lg-5 sec-padd">
			{/* Map through images and render SingleFeature component for each */}
			{imgs.map((img, i) => (
				<SingleFeature key={i} img={img} classLayout="col-12 col-lg" />
			))}
		</section>
	);
};

export default Features;
