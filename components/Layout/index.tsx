import { Grid2, Theme, ThemeProvider } from '@mui/material'
import classnames from 'classnames'
import Head from 'next/head'
import { ReactNode } from 'react'
import customTheme from '../../styles/customMuiTheme'
import PersonJsonLd from '../schemas/PersonJsonLd'
import styles from './layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
  dark?: boolean
  theme?: Theme
}

const Layout = ({ children, title = 'Mason McIntyre', dark, theme = customTheme }: Props) => (
  <Grid2 className={classnames(styles['layout'], dark ? styles['dark'] : '')}>
    <Head>
      <title>{title}</title>
      <PersonJsonLd />
      <meta charSet="utf-8" />
      <meta name="google-site-verification" content="yvJk6V5mexkpQDw1vr4H0bE0uIMXrgpJSC9kPx0MDtw" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={`Mason McIntyre is an experienced Software Engineer with a demonstrated history of 
        working in the software engineering / information technology industry.
        Mason is skilled in JavaScript/TypeScript, Node.js, Express.js, React, Scala, PostgreSQL, 
        SQL, RethinkDB, SASS/CSS, HTML/HTML5, 
        Unix, Linux, Java. Strong software engineering professional with a 
        Bachelor of Science (BS) focused in Computer Science from Wilkes University.`}
      />
      <link rel="icon" type="image/png" href="/img/icons/favicon-1/favicon.ico" />
      <link type="text/css" rel="preload" as="style" href="/css/app.css" />
      <link type="text/css" rel="stylesheet" href="/css/app.css" />
      <link
        type="text/css"
        rel="preload"
        as="style"
        href="/css/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="/css/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Grid2>
)

export default Layout
