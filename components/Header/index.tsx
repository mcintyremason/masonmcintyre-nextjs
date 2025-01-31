import { AppBar, Grid2, Link, Typography } from '@mui/material'
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
      <Grid2 container direction="column" justifyContent="center">
        <Grid2 container className={styles['header']}>
          <Grid2 container size={{ xs: 10, sm: 6 }} direction="column" justifyContent="center">
            <Typography variant="h1" itemProp="name" className={styles['header-name']}>
              <Link className={styles['name']} href="/">
                <span itemProp="givenName">Mason </span>
                <span itemProp="familyName">McIntyre</span>
              </Link>
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 6 }} className={styles['hamburger-nav-container']}>
            <HamburgerNav active={hambugerActive} onClick={hamburgerOnClick} />
          </Grid2>
          <Grid2
            container
            justifyContent="center"
            size={{ xs: 12 }}
            className={classNames(styles['menu-container'], hambugerActive ? styles['active'] : '')}
          >
            <Grid2
              className={styles['menu']}
              container
              justifyContent="center"
              direction="row"
              wrap="nowrap"
            >
              <Grid2 className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/resume">
                  Resume
                </Link>
              </Grid2>
              <Grid2 className={styles['menu-link-divider']}>|</Grid2>
              <Grid2 className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/projects">
                  Projects
                </Link>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </AppBar>
  )
}

export default Header
