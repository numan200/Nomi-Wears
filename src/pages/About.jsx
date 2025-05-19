import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import mainImg from "../assets/about_img.png";
// import SubscriptionForm from "../components/SubscriptionForm";
import DescribedImage from "../components/DescribedImage";

const About = () => {
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
      className="about-page text-center py-3 pt-5"
    >
      <div className="container p-5 rounded-5 bg-black">
        {/* Page header with dashed styling */}
        <HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal  fs-3" />

        {/* Main image with descriptive text */}
        <DescribedImage
          img={mainImg}
          imgTitle="clothes image"
          styleInLarge="column-gap-xl-4"
          styleImg="col-xl-5"
          styleText="col-xl-6"
          sideText={
            <>
              <p>
                Nomi Wears was born out of a passion for innovation and a desire
                to revolutionize the way people shop online. Our journey began
                with a simple idea: to provide a platform where customers can
                easily discover, explore, and purchase a wide range of products
                from the comfort of their homes.
                <br />
                <br />
                Since our inception, we&rsquo;ve worked tirelessly to curate a
                diverse selection of high-quality products that cater to every
                taste and preference. From fashion and beauty to advertising you
                brand, we offer an extensive collection sourced from trusted
                brands and suppliers.We provide all kind of printing advertising
                like printed Shirts,Caps,Mugs,keychains and a lot of other
                stuff. We also provide some product as a wholesale.
              </p>
              {/* Mission statement */}
              <div className="mission">
                <h4 className="my-3 mt-4 c-white">Our Mission</h4>
                <p className="mb-0">
                  Our mission at Nomi Wears is to empower customers with choice,
                  convenience, and confidence. We&rsquo;re dedicated to
                  providing a seamless shopping experience that exceeds
                  expectations, from browsing and ordering to delivery and
                  beyond.
                </p>
              </div>
            </>
          }
        />

        {/* Why Choose Us section */}
        <section className="choose-us mt-6">
          <HeaderDashed head1="WHY" head2="CHOOSE US" />
          <div className="pros mt-4">
            <div className="row row-gap-4">
              {/* Each article represents a benefit */}
              <article className="col-12 col-lg-4">
                <div className="text-start border rounded p-4 h-100">
                  <h4 className="fs-6 fw-bold">Quality Assurance:</h4>
                  <p className="c-mm-gray mb-0 mt-4">
                    We meticulously select and vet each product to ensure it
                    meets our stringent quality standards.
                  </p>
                </div>
              </article>
              <article className="col-12 col-lg-4">
                <div className="text-start border rounded p-4 h-100">
                  <h4 className="fs-6 fw-bold">Convenience:</h4>
                  <p className="c-mm-gray mb-0 mt-4">
                    We meticulously select and vet each product to ensure it
                    meets our stringent quality standards.
                  </p>
                </div>
              </article>
              <article className="col-12 col-lg-4">
                <div className="text-start border rounded p-4 h-100">
                  <h4 className="fs-6 fw-bold">
                    Exceptional Customer Service:
                  </h4>
                  <p className="c-mm-gray mb-0 mt-4">
                    Our team of dedicated professionals is here to assist you
                    the way, ensuring your satisfaction is our top priority.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Subscription form for users */}
        {/* <SubscriptionForm /> */}
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

export default About;
