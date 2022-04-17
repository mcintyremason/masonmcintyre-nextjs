import { Grid } from '@material-ui/core'
import styles from './index.module.css'

import Draw from '../../../components/Draw'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const DrawPage = () => (
  <Layout title="Mason McIntyre">
    <Grid className={styles['draw']} itemScope itemType="http://schema.org/Person">
      <Header />
      <Draw />
      <Footer />
    </Grid>
  </Layout>
)

export default DrawPage
