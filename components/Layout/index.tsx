import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  styles?: string
}

const Layout = ({ children, title = 'Mason McIntyre', styles = '' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="google-site-verification" content="yvJk6V5mexkpQDw1vr4H0bE0uIMXrgpJSC9kPx0MDtw" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/img/icons/favicon-1/favicon.ico" />
      <meta
        name="description"
        content="Mason McIntyre is an experienced Software Engineer with a demonstrated history of working in the mechanical or industrial engineering industry. Skilled in JavaScript, Node.js, Express.js, React, Angular 2/6, MySQL, RethinkDB, SASS/CSS, HTML/HTML5, SQL, Unix, Linux, Java, C++, and C. Strong engineering professional with a Bachelor of Science (BS) focused in Computer Science from Wilkes University."
      />
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
      {styles}
    </Head>
    {children}
  </div>
)

export default Layout
