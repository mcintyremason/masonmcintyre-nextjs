import React from 'react'
import classNames from 'classnames'
import SeniorProjectCanvas from './SeniorProjectCanvas'
import { Grid } from '@material-ui/core'

type SeniorProjectProps = {}

const SeniorProject: React.FC<SeniorProjectProps> = (props: SeniorProjectProps) => {
  return (
    <Grid container direction="column" justify="center" className={classNames('senior-project')}>
      <Grid container direction="column">
        <Grid container item justify="center">
          <h2 className={classNames('title')}>Interactive Sprite Animation within a Canvas</h2>
        </Grid>
        <Grid container item justify="center">
          <h4 className={classNames('title')}>Click the animation, or press "Space" to jump!</h4>
        </Grid>
      </Grid>
      <SeniorProjectCanvas />
    </Grid>
  )
}

export default SeniorProject
