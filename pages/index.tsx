import { Grid } from '@material-ui/core'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePageContent from '../components/HomePageContent'
import Layout from '../components/Layout'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout title="Mason McIntyre">
    <Grid className={styles['index']} itemScope itemType="http://schema.org/Person">
      <Header />
      <HomePageContent />
      <Footer />
    </Grid>
  </Layout>
)

export default IndexPage
