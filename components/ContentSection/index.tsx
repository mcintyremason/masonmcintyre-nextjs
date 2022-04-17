import { Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import styles from './contentSection.module.css'

type ContentSectionProps = {}

const ContentSection: React.FC<ContentSectionProps> = (_: ContentSectionProps) => {
  return (
    <Grid container className={styles['content-section-container']}>
      <Grid item xs={12} lg={6} xl={6}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          className={styles['img-container']}
        >
          <Grid container justifyContent="center">
            <img
              src="/img/20160720_Mt-Marcy-Stream-View_468x624.webp"
              alt="Mt. Marcy"
              width="262"
              height="350"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        xl={5}
        container
        direction="column"
        justifyContent="flex-start"
        className={styles['about-container']}
      >
        <Typography className={styles['about']}>
          <span id="greeting">Hey there!</span> I'm Mason McIntyre, & I'm a 29 year old currently
          living in Bethlehem, Pennsylvania. I'm a Senior Software Engineer at&nbsp;
          <Link href="https://www.disneystreaming.com/">Disney Streaming Services</Link>. I develop
          & maintain React applications written in TypeScript, REST servers using Scala, architect
          systems with AWS infrastructure, promote code changes with custom Jenkins pipelines &
          initiated/lead monthly education sessions that promote collaboration with other team
          members by showcasing topics they find interesting.
        </Typography>
        <Typography>
          When I'm not in the office, I'm either hanging out with my daughter Jane Mae, my dog Luna,
          friends & family, or am on some type of adventure! My passions include reading, working
          out, & traveling; from hiking up mountains (like Mt. Marcy), to exploring foreign cities
          (such as Berlin).
        </Typography>
        <Typography>
          If you're interested in seeing some of the work I've done over the years, please visit
          my&nbsp;
          <a href="https://github.com/mcintyremason">
            GitHub <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          &nbsp;page!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ContentSection
