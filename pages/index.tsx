import { Grid2 } from '@mui/material'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePageContent from '../components/HomePageContent'
import Layout from '../components/Layout'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout title="Mason McIntyre">
    <Grid2 className={styles['index']} itemScope itemType="http://schema.org/Person">
      <Header />
      <HomePageContent />
      <Footer />
    </Grid2>
  </Layout>
)

export default IndexPage
