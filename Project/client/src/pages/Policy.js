import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p> Data Collection Policy</p>
          <p>Data Sharing Policy</p>
          <p>User Rights & Controls</p>
          <p>Cookies and Tracking</p>
          <p>Data Retention Policy</p>
          <p>Children’s Privacy</p>
          <p>Contact Information</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;