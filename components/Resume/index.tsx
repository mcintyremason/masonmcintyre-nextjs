import { Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import styles from './resume.module.css'

type ResumeProps = {}

const Resume: React.FC<ResumeProps> = (_: ResumeProps) => {
  return (
    <Grid container direction="column" className={styles['resume-container']}>
      <Grid
        id="downloads-container"
        container
        justifyContent="flex-end"
        className={styles['downloads-container']}
      >
        <Link legacyBehavior href="/docs/Mason-McIntyre-Resume.pdf">
          <a>
            <i className="fa fa-download"></i>&nbsp;Download
          </a>
        </Link>
      </Grid>
      <Grid
        id="education-container"
        container
        justifyContent="space-between"
        className={styles['education-container']}
      >
        <Grid item xs={12} md={3} lg={3}>
          <Grid container justifyContent="flex-start" className={styles['section-title-container']}>
            <Typography variant="h2" className={styles['education-title']}>
              Education
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} lg={9} className={styles['education']}>
          <Typography variant="h4">
            B.S, Computer Science -
            <span itemProp="alumniOf">
              <Link href="https://www.wilkes.edu/bulletin/current/undergraduate/degrees-programs/department-mathematics-computer-science/computer-science/index.aspx">
                Wilkes University
              </Link>
            </span>
            - 2015
          </Typography>
        </Grid>
      </Grid>
      <Grid
        id="experiences-container"
        container
        justifyContent="space-between"
        className={styles['experiences-container']}
      >
        <Grid item xs={12} md={3} lg={3}>
          <Grid container justifyContent="flex-start" className={styles['section-title-container']}>
            <Typography variant="h2" className={styles['experiences-title']}>
              Experience
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} lg={9} className={styles['experiences']}>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Tech Lead Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="https://dmedmedia.disney.com/">Disney Streaming Services</Link>
              </span>
            </Typography>
            <Typography variant="h5">October 2022 - Present</Typography>
            &nbsp;
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Senior Software Engineer
              </span>
            </Typography>
            <Typography variant="h5">November 2021 - October 2022</Typography>
            &nbsp;
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Software Engineer
              </span>
            </Typography>
            <Typography variant="h5">March 2020 - November 2021</Typography>
            <ul>
              <li>Lead engineer with five direct reports</li>
              <li>
                Develop & maintain the company’s customer service (CS) tool, using React,
                TypeScript, & CSS3
              </li>
              <li>Create & maintain REST servers using Scala + Play</li>
              <li>
                Architect systems with AWS infrastructure, & promote code changes with Jenkins
                Pipelines
              </li>
              <li>
                Lead on CS agent change history tracking, using AWS Kinesis, AWS Aurora +
                PostgreSQL, & Scala
              </li>
              <li>Lead on Continuous Testing effort, using Cypress, Docker, & Jenkins Piplines</li>
              <li>
                Initiated & coordinate team education sessions that promote culture, innovation, &
                collaboration
              </li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} xl={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>TypeScript</li>
                    <li className={styles['tech']}>Scala</li>
                    <li className={styles['tech']}>AWS</li>
                    <li className={styles['tech']}>Cypress</li>
                    <li className={styles['tech']}>Jenkins</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>React</li>
                    <li className={styles['tech']}>Play Framework</li>
                    <li className={styles['tech']}>PostgreSQL</li>
                    <li className={styles['tech']}>Docker</li>
                    <li className={styles['tech']}>Node.js</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="http://www.shift4.com/">Shift4</Link>
              </span>
            </Typography>
            <Typography variant="h5">January 2020 - March 2020</Typography>
            <ul>
              <li>Worked on the Harbortouch project</li>
              <li>Helped maintain an app written in Ember.js</li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript (ES5/6)</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>Ember.js</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="https://advisorinnovationlabs.com/">A I Labs</Link>
              </span>
            </Typography>
            <Typography variant="h5">February 2019 - January 2020</Typography>
            <ul>
              <li>Develops REST-API endpoints, in Node.js/Express & Java/SpringBoot.</li>
              <li>Maintains & implements integrations, using Node.js/Express.</li>
              <li>Contributes to frontend applications written in React.</li>
              <li>Implemented job queuing system, using Bull Queue.</li>
              <li>
                Created real-time bidirectional messaging between load balanced servers & the web
                browser, using Redis & Socket.io.
              </li>
              <li>
                Integrated ​Capacitor​ to deploy ​PWAs​ on iOS, Android, and the Web, with single a
                code base.
              </li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript (ES5/6)</li>
                    <li className={styles['tech']}>Node.js</li>
                    <li className={styles['tech']}>Ionic/Capacitor</li>
                    <li className={styles['tech']}>Socket.io</li>
                    <li className={styles['tech']}>Linux/BASH</li>
                    <li className={styles['tech']}>SCSS/CSS</li>
                    <li className={styles['tech']}>HTML</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>TypeScript</li>
                    <li className={styles['tech']}>React</li>
                    <li className={styles['tech']}>REST</li>
                    <li className={styles['tech']}>Java</li>
                    <li className={styles['tech']}>Bull Queue</li>
                    <li className={styles['tech']}>Git</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="https://www.gojikiosk.com">Goji Systems</Link>
              </span>
            </Typography>
            <Typography variant="h5">February 2018 - February 2019</Typography>
            <ul>
              <li>First salaried employee</li>
              <li>Developed REST-API endpoints in Node.js/Express</li>
              <li>Contributed to frontend (both Kiosk & Dashboard) written in Angular 2+</li>
              <li>Implemented message queuing using Redis & Socket.io for push to front-end</li>
              <li>Responsible for server operations & code promotion</li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript (ES5/6)</li>
                    <li className={styles['tech']}>Node.js</li>
                    <li className={styles['tech']}>Angular 2+</li>
                    <li className={styles['tech']}>Socket.io</li>
                    <li className={styles['tech']}>Git</li>
                    <li className={styles['tech']}>HTML</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>TypeScript</li>
                    <li className={styles['tech']}>RethinkDB</li>
                    <li className={styles['tech']}>RxJS</li>
                    <li className={styles['tech']}>REST</li>
                    <li className={styles['tech']}>Linux/BASH</li>
                    <li className={styles['tech']}>SCSS/CSS</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="https://www.victaulic.com">Victaulic</Link>
              </span>
            </Typography>
            <Typography variant="h5">September 2016 - February 2018</Typography>
            <ul>
              <li>
                Manage & maintain SharePoint Online Intranet, which services over 3,500 employees.
              </li>
              <li>Maintain three ASP.Net web applications in C#, hosted in Microsoft Azure.</li>
              <li>
                Translate business requirements into technical requirements & create test cases for
                web applications.
              </li>
              <li>
                Re-architected static file system to create centralized code base globally
                accessible from anywhere within the Intranet.
              </li>
              <li>Configured RaspberryPis to display Google Chrome in kiosk mode on boot.</li>
              <li>
                As lead developer, worked directly with vendor to refactor in house JavaScript
                libraries & optimize existing code base; SharePoint home page load time was
                decreased by over 150%.
              </li>
              <li>
                Introduced company to Git to create a new code change process, which moved many
                projects into source control.
              </li>
              <li>
                Introduced company to DoneDone issue tracker, creating new UAT & production
                development/testing process.
              </li>
              <li>
                Wrote administrative Sharepoint PowerShell scripts, including a script to remove
                site users also disabled in Active Directory & a script to activate SharePoint CDN
                on various sites.
              </li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript (ES6)</li>
                    <li className={styles['tech']}>Gulp</li>
                    <li className={styles['tech']}>AngularJS 1.3</li>
                    <li className={styles['tech']}>Git</li>
                    <li className={styles['tech']}>HTML</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>Node.js</li>
                    <li className={styles['tech']}>REST</li>
                    <li className={styles['tech']}>Linux/BASH</li>
                    <li className={styles['tech']}>PowerShell</li>
                    <li className={styles['tech']}>CSS</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              <span className={styles['job-title']} itemProp="jobTitle">
                Web Developer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="http://www.liquidint.com">Liquid Interactive</Link>
              </span>
            </Typography>
            <Typography variant="h5">November 2015 - September 2016</Typography>
            <ul>
              <li>
                Redesigned & maintained close to 25 static & dynamic websites for world-renowned
                organizations, such as Volvo, Mack Trucking, Martin Guitar, Celestron, Penske,
                Victaulic, & Temple University.
              </li>
              <li>
                Created custom data models to speed up development of Umbraco views by roughly 50%.
              </li>
              <li>Configured UAT & production server environments.</li>
              <li>
                Configured load balancer for internal development servers to simulate production
                environment using Linux virtual machines.
              </li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript (ES6)</li>
                    <li className={styles['tech']}>AngularJS 1.0</li>
                    <li className={styles['tech']}>Sass/Less/CSS</li>
                    <li className={styles['tech']}>PHP</li>
                    <li className={styles['tech']}>Apache</li>
                    <li className={styles['tech']}>Vagrant</li>
                    <li className={styles['tech']}>Scotch Box</li>
                    <li className={styles['tech']}>MySQL</li>
                    <li className={styles['tech']}>Wordpress</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>Node.js</li>
                    <li className={styles['tech']}>HTML</li>
                    <li className={styles['tech']}>C#</li>
                    <li className={styles['tech']}>NGINX</li>
                    <li className={styles['tech']}>VVV</li>
                    <li className={styles['tech']}>Microsoft SQL Server</li>
                    <li className={styles['tech']}>HeidiSQL</li>
                    <li className={styles['tech']}>Umbraco</li>
                    <li className={styles['tech']}>Sitecore</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              Software Development Intern,
              <Link href="http://www.baseballinfosolutions.com">BaseballInfoSolutions</Link>
              <span> / </span>
              <Link href="http://www.sportsinfosolutions.com">SportsInfoSolutions</Link>
            </Typography>
            <Typography variant="h5">June 2015 - November 2015</Typography>
            <ul>
              <li>Developed dynamic & static web pages using ASP.NET & JavaScript.</li>
              <li>Created underlying SQL database architecture for aggregating football data.</li>
              <li>
                Created intuitive GUIs used by roughly 70 video scouts to enter football team,
                roster, depth chart, player, & injury status data into a MSSQL database.
              </li>
              <li>
                Developed front-end component of MLB lineup optimizer, which passed arguments to
                server-side Ruby programs & parsed output to an interactive user interface.
              </li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript</li>
                    <li className={styles['tech']}>HTML</li>
                    <li className={styles['tech']}>Microsoft SQL Server</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>ASP.NET</li>
                    <li className={styles['tech']}>CSS</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">
              Software Development Intern,
              <Link href="http://www.trailkam.com">TrailKam.com</Link>
            </Typography>
            <Typography variant="h5">January 2015 - June 2015</Typography>
            <ul>
              <li>
                Worked closely with the founder of TrailKam, Bernie Graham, to get trailkam.com to a
                minimal viable product (MVP).
              </li>
              <li>Presented work at the Eastern Colleges Science Conference in Niagara, NY.</li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript</li>
                    <li className={styles['tech']}>HTML</li>
                    <li className={styles['tech']}>Microsoft SQL Server</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>PHP</li>
                    <li className={styles['tech']}>CSS</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">Software Development Intern, BrainRush.com</Typography>
            <Typography variant="h5">May 2014 - November 2014</Typography>
            <ul>
              <li>Created static FAQ page using PHP, JavaScript, & CSS.</li>
              <li>Tested & tracked project software issues using JIRA like software.</li>
            </ul>
            <Grid container justifyContent="space-between" className={styles['techs-container']}>
              <Grid item xs={12} lg={3} xl={4}>
                <Typography variant="h5" className={styles['techs-title']}>
                  Technologies Used:
                </Typography>
              </Grid>
              <Grid container item xs={12} lg={8} className={styles['techs']}>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-one']}>
                    <li className={styles['tech']}>JavaScript</li>
                    <li className={styles['tech']}>Symfony 2</li>
                    <li className={styles['tech']}>CSS</li>
                  </ul>
                </Grid>
                <Grid item xs={6} xl={5}>
                  <ul className={styles['techs-two']}>
                    <li className={styles['tech']}>PHP</li>
                    <li className={styles['tech']}>HTML</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles['experience']}>
            <Typography variant="h4">Support Technician, Easton Area High School</Typography>
            <Typography variant="h5">May 2014 - September 2014</Typography>
            <ul>
              <li>
                Computer maintenance; including administration, imaging, troubleshooting, & repairs.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        id="misc-container"
        container
        justifyContent="space-between"
        className={styles['misc-container']}
      >
        <Grid item xs={12} md={3} lg={3} className={styles['section-title-container']}>
          <Typography variant="h2" className={styles['misc-title']}>
            Misc.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Grid container className={styles['misc']}>
            <ul>
              <li>Wrote first program on an Apple //e in eighth grade</li>
              <li itemProp="award">All-American Wrestler</li>
              <li itemProp="award">
                2011 PIAA AAA Wrestling Team State Runner-up, Varsity Wrestler
              </li>
              <li itemProp="award">
                2011 PIAA AAAA District Champion Football Team, First Team Varsity Athlete
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Resume
