import styles from './projects.module.css'

import { Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

type ProjectsProps = {}

const Projects: React.FC<ProjectsProps> = (_: ProjectsProps) => {
  return (
    <Grid container justifyContent="center" className={styles['projects-container']}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className={styles['projects-container']}
      >
        <Typography variant="h4" className={styles['project']}>
          <Link href="https://github.com/mcintyremason">
            <span>
              GitHub <i className="fa fa-github" aria-hidden="true"></i>
            </span>
          </Link>
        </Typography>
        <Typography variant="h4" className={styles['project']}>
          <Link href="https://cryptoget.dev">Crypto Get - cryptoget.dev</Link>
        </Typography>
        <Typography variant="h4" className={styles['project']}>
          <Link href="/projects/card-matcher/">Card Matcher</Link>
        </Typography>
        <Typography variant="h4" className={styles['project']}>
          <Link href="/projects/senior-project">Senior Project</Link>
        </Typography>
        <Typography variant="h4" className={styles['project']}>
          <Link href="/projects/draw">Draw</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Projects
