import styles from './index.module.css'

import { Grid2 } from '@mui/material'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Projects from '../../components/Projects'

const IndexPage = () => (
  <Layout title="Mason McIntyre">
    <Grid2 className={styles['projects']} itemScope itemType="http://schema.org/Person">
      <Header />
      <Projects />
      <Footer isAbsolute />
    </Grid2>
  </Layout>
)

export default IndexPage
