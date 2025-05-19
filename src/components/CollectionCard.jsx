import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CollectionCard = ({ data: { _id, image, name, price }, classPadding }) => {
  const navigate = useNavigate();
  const { currency } = useContext(ShopContext);

  return (
    <div
      className={`collection-card trans-3 p-2 border-1 card box-shadow-black rounded-3x cursor ${classPadding}`}
      onClick={() => navigate(`/products/${_id}`)}
      data-aos={"fade-up"}
      style={{
        backgroundColor: "#111111",
        width: "100%",             // Make sure it fills the column/container
        maxWidth: "300px",         // Set a consistent max width
        minHeight: "420px",        // Fix the card height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <figure
        className="overflow-hidden rounded"
        style={{ height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={image[0]}
          alt={name}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover"
          }}
          className="card-img rounded trans-3 img-scall"
        />
      </figure>

      <article className="card-body text-start p-0 mt-3">
        <h4 className="card-title fs-6 c-white fw-normal">{name}</h4>
        <div className="price fw-bold fs-small c-white">{currency} {price}</div>
      </article>
    </div>
  );
};

export default CollectionCard;
