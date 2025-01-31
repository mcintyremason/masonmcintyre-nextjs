import { Grid2, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from './homePageContent.module.css'

type HomePageContentProps = {}

const HomePageContent: React.FC<HomePageContentProps> = (_: HomePageContentProps) => {
  return (
    <Grid2 container className={styles['content-section-container']}>
      <Grid2
        size={{
          xs: 12,
          lg: 6,
          xl: 6,
        }}
      >
        <Grid2
          container
          direction="column"
          justifyContent="center"
          className={styles['img-container']}
        >
          <Grid2 container justifyContent="center">
            <img
              src="/img/20160720_Mt-Marcy-Stream-View_468x624.webp"
              alt="Mt. Marcy"
              width="262"
              height="350"
            />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        size={{
          xs: 12,
          lg: 6,
          xl: 5,
        }}
        container
        direction="column"
        justifyContent="flex-start"
        className={styles['about-container']}
      >
        <Typography className={styles['about']}>
          <span id="greeting">Hey!</span> I'm Mason McIntyre, & I'm a 32 year old currently living
          in Bethlehem, Pennsylvania. I'm a Lead Software Engineer at&nbsp;
          <Link href="https://en.wikipedia.org/wiki/Disney_Streaming">Disney Streaming</Link>. I
          currently develop & maintain Next.js React applications written in TypeScript, REST
          servers using Node.js, architect systems with AWS infrastructure, promote code changes
          with custom Jenkins pipelines & lead monthly education sessions that promote collaboration
          with other team members by showcasing topics they find interesting.
        </Typography>
        <Typography>
          When I'm not in the office, I'm either hanging out with my fiance Rachel, my daughters
          Jane & Ivy, my dog Link, my friends, my family, or am on some type of adventure! My
          passions include reading, working out, & traveling; from hiking up mountains (like Mt.
          Marcy), to exploring foreign cities (such as Berlin).
        </Typography>
        <Typography>
          If you're interested in seeing some of the work I've done over the years, please visit
          my&nbsp;
          <a href="https://github.com/mcintyremason">
            GitHub <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          &nbsp;page!
        </Typography>
      </Grid2>
    </Grid2>
  )
}

export default HomePageContent
