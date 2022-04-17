import styles from './index.module.css'

import { Grid } from '@material-ui/core'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import SeniorProject from '../../../components/SeniorProject'

const SeniorProjectPage = () => (
  <Layout title="Mason McIntyre" dark>
    <Grid
      className={styles['senior-project-container']}
      itemScope
      itemType="http://schema.org/Person"
    >
      <Header />
      <SeniorProject />
      <Footer isAbsolute />
    </Grid>
  </Layout>
)

export default SeniorProjectPage
