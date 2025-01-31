import styles from './projects.module.css'

import { Grid2, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type ProjectsProps = {}

const Projects: React.FC<ProjectsProps> = (_: ProjectsProps) => {
  return (
    <Grid2 container justifyContent="center" className={styles['projects-container']}>
      <Grid2
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
          <Link href="https://cryptototals.com">Crypto Totals</Link>
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
      </Grid2>
    </Grid2>
  )
}

export default Projects
