import { Grid } from '@material-ui/core'
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
      className={classNames('senior-project')}
    >
      <Grid container direction="column">
        <Grid container item justifyContent="center">
          <h2 className={classNames('title')}>Interactive Sprite Animation within a Canvas</h2>
        </Grid>
        <Grid container item justifyContent="center">
          <h4 className={classNames('title')}>Click the animation, or press "Space" to jump!</h4>
        </Grid>
      </Grid>
      <SeniorProjectCanvas />
    </Grid>
  )
}

export default SeniorProject
