import styles from './senior-project.module.css'

import { Grid2, Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import SeniorProjectCanvas from './SeniorProjectCanvas'

type SeniorProjectProps = {}

const SeniorProject: React.FC<SeniorProjectProps> = (_: SeniorProjectProps) => {
  return (
    <Grid2
      container
      direction="column"
      justifyContent="center"
      className={classNames(styles['senior-project'])}
    >
      <Grid2 container justifyContent="center">
        <Typography variant={'h2'} className={classNames(styles['title'])}>
          Interactive Sprite Animation within a Canvas
        </Typography>
      </Grid2>
      <Grid2 container justifyContent="center">
        <Typography variant={'h4'} className={classNames(styles['title'])}>
          Click the animation, or press "Space" to jump!
        </Typography>
      </Grid2>
      <Grid2
        container
        justifyContent="center"
        className={classNames(styles['senior-project-canvas-container'])}
      >
        <SeniorProjectCanvas />
      </Grid2>
    </Grid2>
  )
}

export default SeniorProject
