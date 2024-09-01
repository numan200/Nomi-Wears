import { useNavigate } from "react-router-dom";


const CollectionCard = ({
	data: { _id, image, name, price }, // Destructure product data props
	// imageNotDeirect,                  // Conditional flag for image path
	classFlex                         // Additional CSS classes for layout flexibility
	
}) => {
	const navigate = useNavigate();   // Hook to programmatically navigate to product details

	

	return (
		<div
			className={`collection-card trans-3 p-2 border-0 card box-shadow-gray ${classFlex}`}
			role="button"
			onClick={() => navigate(`/products/${_id}`)}                  // Navigate to product details on click
			data-aos={"fade-up"}
		>
			<figure className="overflow-hidden rounded">
				<img
					src={image[0]}     // Conditionally prepend '.' to the image path
					// src={`isNotDirect? ${image[0]}}     // Conditionally prepend '.' to the image path
					alt={name}
					className="card-img rounded mx-h-300 trans-3 img-scall"
				/>
			</figure>
			<article className="card-body text-start p-0">
				<h4 className="card-title fs-6 c-gray fw-normal">{name}</h4>
				<div className="price fw-bold fs-small c-d-gray">{price}$</div>
			</article>
		</div>
	);
};

export default CollectionCard;
