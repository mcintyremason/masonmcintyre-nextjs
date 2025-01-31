import { Grid2 } from '@mui/material'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Resume from '../../components/Resume'
import styles from './index.module.css'

const ResumePage = () => (
  <Layout title="Mason McIntyre">
    <Grid2 className={styles['resume']} itemScope itemType="http://schema.org/Person">
      <Header />
      <Resume />
      <Footer />
    </Grid2>
  </Layout>
)

export default ResumePage
