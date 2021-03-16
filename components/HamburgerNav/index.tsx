import { Grid } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

type HamburgerNavProps = {
  active: boolean
  onClick: (event: any) => void
}

const HamburgerNav: React.FC<HamburgerNavProps> = (props: HamburgerNavProps) => {
  const { active, onClick } = props

  return (
    <Grid container justify="flex-end" onClick={onClick} className="hamburger-container">
      <button
        className={classNames('hamburger', 'hamburger--collapse', active ? 'is-active' : '')}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </Grid>
    // <Grid onClick={onClick} className="hamburger-container">
    //   <div
    //     id="hamburger"
    //     className={classNames('hamburger', active ? 'active' : '')}
    //     onClick={onClick}
    //   >
    //     <div></div>
    //   </div>
    // </Grid>
  )
}
export default HamburgerNav
