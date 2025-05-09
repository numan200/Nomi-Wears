import { motion } from "framer-motion";
import mainImg from "../assets/contact_img.webp";
import DescribedImage from "../components/DescribedImage";
import SubscriptionForm from "../components/SubscriptionForm";
import HeaderDashed from "../components/HeaderDashed";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="contact-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Header with dashed style */}
				<HeaderDashed head1="CONTACT" head2="US" classStyle="fw-normal fs-3" />
				
				{/* Described Image Section */}
				<DescribedImage
					img={mainImg}
					imgTitle="desk image"
					styleInLarge="justify-content-center column-gap-xl-4"
					styleImg="col-xl-5"
					styleText="col-xl-5"
					sideText={
						<>
							{/* Store Information */}
							<div className="our-store">
							
								<div className="address col-12 col-lg  text-center">
							
							<ul className="d-flex flex-column align-items-center align-items-lg-start ps-0 gap-2">
								<li className="c-gray"> <h4>Tel: +92 370 7049014 </h4></li>
								<li className="c-gray"> <h4>Whatsapp: 0370 7049014 </h4></li>
								<li>
									<a
										className="c-gray text-decoration-none  hover-underline"
										href="mailto:ahmedmaher.dev1@gmail.com"
										title="get in touch"
									>
									  <h4> Email: xyz90official@gmail.com </h4>
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/nomi-wears-609915268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
										target="_blank"
										title="Go To LinkedIn"
										className="text-decoration-none c-gray"
									>
										<h4>LinkedIn</h4>	
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/nomiwears?utm_source=qr&igsh=MW1jdXc5bGVvYjc1Yw%3D%3D"
										target="_blank"
										title="Go To Instagram"
										className="text-decoration-none c-gray"
									>
										<h4>Instagram</h4>									
									</a>
								</li>
								<li>
									<a
										href="https://www.facebook.com/share/1AKcBKarbG/"
										target="_blank"
										title="Go To Facebook"
										className="text-decoration-none c-gray"
									>
										<h4>Facebook</h4>
									</a>
								</li>
								<li>
									<a
										href="https://www.tiktok.com/@nomiwears?_t=ZS-8wCxLINmHDj&_r=1"
										target="_blank"
										title="Go To Tiktok"
										className="text-decoration-none c-gray"
									>
										<h4>Tiktok</h4> 
									</a>
								</li>
							</ul>
						</div>
							</div>
							{/* Careers Information */}
							{/* <div className="careers mt-5">
								<h4 className="c-d-gray">Careers at Algohary Shop</h4>
								<span className="d-block my-4">
									Learn more about our teams and job openings.
								</span>
								<button className="btn py-3 px-4 border-out-d-gray rounded-0">
									Explore Jobs
								</button>
							</div> */}
						</>
					}
				/>

				{/* Subscription Form */}
				{/* <SubscriptionForm /> */}
			</div>
		</motion.div>
	);
};

export default Contact;
