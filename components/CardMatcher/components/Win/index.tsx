import { Grid2, Typography } from '@mui/material'
import classNames from 'classnames'
import styles from './index.module.css'

const Win = (_: any) => {
  return (
    <Grid2
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classNames(styles['win-container'])}
    >
      <Typography variant="h1">You Win!</Typography>
    </Grid2>
  )
}

export default Win
