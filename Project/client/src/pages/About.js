import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          We are a team of four passionate developers - Shreya Kumari (Frontend Developer & Full Stack), Shardul Rana (Backend Developer & API Integration), 
          Nishan Chakraborty (Database Management & Testing), and Yashasvi Singh (UI Designer & DevOps) working on an innovative, user-friendly online shopping platform. Our goal is to create an intuitive and 
          secure shopping experience with features like a beautiful homepage, easy navigation, and a secure checkout process.our project is designed to
           provide a seamless shopping experience, with an admin dashboard for efficient management.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;