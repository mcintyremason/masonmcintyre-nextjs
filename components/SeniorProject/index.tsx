import styles from './senior-project.module.css'

import { Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import SeniorProjectCanvas from './SeniorProjectCanvas'

type SeniorProjectProps = {}

const SeniorProject: React.FC<SeniorProjectProps> = (_: SeniorProjectProps) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={classNames(styles['senior-project'])}
    >
      <Grid container item justifyContent="center">
        <Typography variant={'h2'} className={classNames(styles['title'])}>
          Interactive Sprite Animation within a Canvas
        </Typography>
      </Grid>
      <Grid container item justifyContent="center">
        <Typography variant={'h4'} className={classNames(styles['title'])}>
          Click the animation, or press "Space" to jump!
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        className={classNames(styles['senior-project-canvas-container'])}
      >
        <SeniorProjectCanvas />
      </Grid>
    </Grid>
  )
}

export default SeniorProject
