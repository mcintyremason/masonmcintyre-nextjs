import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import SeniorProject from "../../components/SeniorProject";
import Footer from "../../components/Footer";

const SeniorProjectPage = () => (
  <Layout title="Mason McIntyre">
    <div className="home dark" itemScope itemType="http://schema.org/Person">
      <div id="app" className="app projects">
        <>
          <Header />
          <SeniorProject />
          <Footer isAbsolute />
        </>
      </div>
    </div>
  </Layout>
);

export default SeniorProjectPage;
