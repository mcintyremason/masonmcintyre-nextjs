import styles from './index.module.css'

import { Grid } from '@material-ui/core'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Projects from '../../components/Projects'

const IndexPage = () => (
  <Layout title="Mason McIntyre">
    <Grid className={styles['projects']} itemScope itemType="http://schema.org/Person">
      <Header />
      <Projects />
      <Footer isAbsolute />
    </Grid>
  </Layout>
)

export default IndexPage
