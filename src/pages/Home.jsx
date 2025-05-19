import MixedAutoSlider from "../components/MixedAutoSlider";
import SubscriptionForm from "../components/SubscriptionForm";
import Features from "../components/Features";
import LatestCollections from "../components/LatestCollections";
import { motion } from "framer-motion";
import BestSeller from "../components/BestSeller";

// Dummy Fixed Data:
// import productsData from "../components/FixedData";

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // const [errorInFetch, setErrorInFetch] = useState(null);
  // const [data, setData] = useState([]);

  // Fetch data for collections
  // useEffect(() => {
  // 	// fetch("https://ahmed-maher77.github.io/Forever__Modern-E-Commerce-Web-Application-with-ReactJS-and-Bootstrap/db.json/products")      // http://localhost:3000/products
  // 	// 	.then((res) => res.json())
  // 	// 	.then((json) => {
  // 	// 		console.log('from github server', json);

  // 	// 		setData(json);
  // 	// 		setLoading(false);
  // 	// 	})
  // 	// 	.catch((error) => {
  // 	// 		setErrorInFetch(error);
  // 	// 		setLoading(false);
  // 	// 	});
  // 	setData(productsData);
  // 	setLoading(false);
  // }, []);

  const iconStyle = {
    backgroundColor: "black",
    color: "orange",
    fontSize: "30px",
    padding: "10px",
    borderRadius: "50%",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page text-center "
    >
      <div className="container rounded-5 bg-black mt-5 pt-1">
        <MixedAutoSlider />

        <LatestCollections />

        <BestSeller />

        {/* <Features /> */}

        {/* <SubscriptionForm /> */}
      </div>
      {/* Sticky Social Media Buttons */}
      {/* <div style={{
  position: "fixed",
  top: "50%",
  right: "10px",
  transform: "translateY(-50%)",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000",
  gap: "10px"
}}> */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#000",
          padding: "10px",
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
        }}
      >
        <a
          href="https://wa.me/923707049014"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nomi-wears-609915268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/share/1AKcBKarbG/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/nomiwears?utm_source=qr&igsh=MW1jdXc5bGVvYjc1Yw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
