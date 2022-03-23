import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Projects from '../../components/Projects'

const IndexPage = () => (
  <Layout title="Mason McIntyre">
    <div className="home projects" itemScope itemType="http://schema.org/Person">
      <div id="app" className="app projects">
        <Header />
        <Projects />
        <Footer isAbsolute />
      </div>
    </div>
  </Layout>
)

export default IndexPage
