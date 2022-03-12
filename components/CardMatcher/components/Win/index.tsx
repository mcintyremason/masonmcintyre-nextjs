import { Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import styles from './index.module.css'

const Win = (_: any) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classNames(styles['win-container'])}
    >
      <Typography variant="h1">You Win!</Typography>
    </Grid>
  )
}

export default Win
