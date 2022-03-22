import { AppBar, Grid, Link, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React, { useState } from 'react'
import HamburgerNav from '../HamburgerNav'
import styles from './index.module.css'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = (_: HeaderProps) => {
  const [hambugerActive, setHambugerActive] = useState(false)

  const hamburgerOnClick = () => {
    setHambugerActive(!hambugerActive)
  }

  return (
    <AppBar position="fixed" className={styles['app-bar']}>
      <Grid container direction="column" justifyContent="center">
        <Grid container className={styles['header']}>
          <Grid container item xs={10} sm={6} direction="column" justifyContent="center">
            <Typography variant="h1" itemProp="name" className={styles['header-name']}>
              <Link className={styles['name']} href="/">
                <span itemProp="givenName">Mason </span>
                <span itemProp="familyName">McIntyre</span>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={2} sm={6} className={styles['hamburger-nav-container']}>
            <HamburgerNav active={hambugerActive} onClick={hamburgerOnClick} />
          </Grid>
          <Grid
            container
            justifyContent="center"
            item
            xs={12}
            className={classNames(styles['menu-container'], hambugerActive ? styles['active'] : '')}
          >
            <Grid
              className={styles['menu']}
              container
              justifyContent="center"
              direction="row"
              wrap="nowrap"
            >
              <Grid className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/resume">
                  Resume
                </Link>
              </Grid>
              <Grid className={styles['menu-link-divider']}>|</Grid>
              <Grid className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/projects">
                  Projects
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
