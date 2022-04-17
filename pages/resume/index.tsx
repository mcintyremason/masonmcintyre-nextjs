import { Grid } from '@material-ui/core'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Resume from '../../components/Resume'
import styles from './index.module.css'

const ResumePage = () => (
  <Layout title="Mason McIntyre">
    <Grid className={styles['resume']} itemScope itemType="http://schema.org/Person">
      <Header />
      <Resume />
      <Footer />
    </Grid>
  </Layout>
)

export default ResumePage
