import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import AllCollections from "../components/AllCollections";
import { ShopContext } from "../context/ShopContext";

// Dummy Fixed Data:
// import productsData from "../components/FixedData";

const Collection = () => {
  const { productsData, search } = useContext(ShopContext);
  // State to store filtered data based on user selection
  const [filteredData, setFilteredData] = useState([]);

  // Function to filter products based on categories and types
  const filterByData = ({ categories, types }) => {
    let newData = [...productsData];
    if (search !== "") {
      newData = newData.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categories.length) {
      // Filter by selected categories
      newData = newData.filter((el) => categories.includes(el.category));
    }
    if (types.length) {
      // Filter by selected subcategories (types)
      newData = newData.filter((el) => types.includes(el.subCategory));
    }
    setFilteredData(newData);
    console.log(newData);
  };

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="collection-page py-3 pt-405"
    >
      <div
        className="container p-5 rounded-5 "
        style={{ backgroundColor: "black" }}
      >
        <div className="row row-gap-4">
          {/* Sidebar with filters */}
          <FiltersSidebar filterByData={filterByData} />

          {/* Display all collections with the fetched data */}
          <div className="col-12 col-md-8 col-lg-9 col-xxl-10 position-relative">
            {filteredData.length ? (
              <AllCollections data={filteredData} />
            ) : (
              <p className="nomatch-msg position-absolute top-50 start-50 fs-3 text-center">
                There are no data match your choice 🙄
              </p>
            )}
          </div>
          {/* <AllCollections data={data} loading={loading} errorInFetch={errorInFetch} /> */}
        </div>
      </div>
      {/* Sticky Social Media Buttons */}
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
    </motion.div>
  );
};

export default Collection;
