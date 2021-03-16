import React from 'react'

import { Grid, Typography } from '@material-ui/core'

const Win = (props: any) => {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Typography variant='h1'>You Win!</Typography>
    </Grid>
  )
}

export default Win
