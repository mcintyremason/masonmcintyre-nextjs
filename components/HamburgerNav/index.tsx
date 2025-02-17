import { Grid2 } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import styles from './index.module.css'

type HamburgerNavProps = {
  active: boolean
  onClick: (event: any) => void
}

const HamburgerNav: React.FC<HamburgerNavProps> = (props: HamburgerNavProps) => {
  const { active, onClick } = props

  return (
    <Grid2
      container
      justifyContent="flex-end"
      onClick={onClick}
      className={styles['hamburger-container']}
    >
      <button
        className={classNames(
          styles['hamburger'],
          styles['hamburger--collapse'],
          active ? styles['is-active'] : '',
        )}
        type="button"
        aria-label="hamburger"
      >
        <span className={styles['hamburger-box']}>
          <span className={styles['hamburger-inner']}></span>
        </span>
      </button>
    </Grid2>
  )
}
export default HamburgerNav
