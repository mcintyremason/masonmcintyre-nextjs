import Draw from '../../../components/Draw'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

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
