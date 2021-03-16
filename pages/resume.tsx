import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

const ResumePage = () => (
  <Layout title="Mason McIntyre">
    <div className="home blog" itemScope itemType="http://schema.org/Person">
      <div id="app" className="app resume">
        <Header />
        <Resume />
        <Footer />
      </div>
    </div>
  </Layout>
)

export default ResumePage
