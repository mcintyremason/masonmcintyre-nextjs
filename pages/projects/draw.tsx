import React from 'react'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Draw from '../../components/Draw'
import Footer from '../../components/Footer'

const DrawPage = () => (
  <Layout title="Mason McIntyre">
    <div className="home" itemScope itemType="http://schema.org/Person">
      <div className="app projects draw">
        <>
          <Header />
          <Draw />
          <Footer />
        </>
      </div>
    </div>
  </Layout>
)

export default DrawPage
