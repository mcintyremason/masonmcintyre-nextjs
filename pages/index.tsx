import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Mason McIntyre">
    <div className="home blog" itemScope itemType="http://schema.org/Person">
      <div id="app" className="app index">
        <Header />
        <ContentSection />
        <Footer />
      </div>
    </div>
  </Layout>
)

export default IndexPage
