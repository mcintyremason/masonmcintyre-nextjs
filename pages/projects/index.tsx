import React from 'react'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'

const IndexPage = () => (
  <Layout title="Mason McIntyre">
    <div className="home projects" itemScope itemType="http://schema.org/Person">
      <div id="app" className="app projects">
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  </Layout>
)

export default IndexPage
