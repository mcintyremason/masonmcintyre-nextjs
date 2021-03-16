import Link from 'next/link'
import React from 'react'

type ResumeProps = {}

const Resume: React.FC<ResumeProps> = (props: ResumeProps) => {
  return (
    <div className="main">
      <div id="downloads-container" className="downloads-container">
        <Link href="/docs/Mason-McIntyre-Resume.pdf">
          <a>
            <i className="fa fa-download"></i>&nbsp;Download
          </a>
        </Link>
      </div>
      <div id="education-container" className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education">
          <h4>
            B.S, Computer Science -
            <span itemProp="alumniOf">
              <Link href="https://www.wilkes.edu/bulletin/current/undergraduate/degrees-programs/department-mathematics-computer-science/computer-science/index.aspx">
                Wilkes University
              </Link>
            </span>
            - 2015
          </h4>
        </div>
      </div>
      <div id="experiences-container" className="experiences-container">
        <h2 className="experiences-title">Experience</h2>
        <div className="experiences">
          <div className="experience">
            <h4>
              <span className="job-title" itemProp="jobTitle">
                Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="https://advisorinnovationlabs.com/">A I Labs</Link>
              </span>
            </h4>
            <h5>February 2019 - January 2020</h5>
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
            <div className="techs-container">
              <h5 className="techs-title">Technologies Used:</h5>
              <div className="techs">
                <ul className="techs-one">
                  <li className="tech">JavaScript (ES5/6)</li>
                  <li className="tech">Node.js</li>
                  <li className="tech">Ionic/Capacitor</li>
                  <li className="tech">Socket.io</li>
                  <li className="tech">Linux/BASH</li>
                  <li className="tech">SCSS/CSS</li>
                  <li className="tech">HTML</li>
                </ul>
                <ul className="techs-two">
                  <li className="tech">TypeScript</li>
                  <li className="tech">React</li>
                  <li className="tech">REST</li>
                  <li className="tech">Java</li>
                  <li className="tech">Bull Queue</li>
                  <li className="tech">Git</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <h4>
              <span className="job-title" itemProp="jobTitle">
                Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="https://www.gojikiosk.com">Goji Systems</Link>
              </span>
            </h4>
            <h5>February 2018 - February 2019</h5>
            <ul>
              <li>First salaried employee</li>
              <li>Developed REST-API endpoints in Node.js/Express</li>
              <li>Contributed to frontend (both Kiosk & Dashboard) written in Angular 2+</li>
              <li>Implemented message queuing using Redis & Socket.io for push to front-end</li>
              <li>Responsible for server operations & code promotion</li>
            </ul>
            <div className="techs-container">
              <h5 className="techs-title">Technologies Used:</h5>
              <div className="techs">
                <ul className="techs-one">
                  <li className="tech">JavaScript (ES5/6)</li>
                  <li className="tech">Node.js</li>
                  <li className="tech">Angular 2+</li>
                  <li className="tech">Socket.io</li>
                  <li className="tech">Git</li>
                  <li className="tech">HTML</li>
                </ul>
                <ul className="techs-two">
                  <li className="tech">TypeScript</li>
                  <li className="tech">RethinkDB</li>
                  <li className="tech">RxJS</li>
                  <li className="tech">REST</li>
                  <li className="tech">Linux/BASH</li>
                  <li className="tech">SCSS/CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <h4>
              <span className="job-title" itemProp="jobTitle">
                Software Engineer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="https://www.victaulic.com">Victaulic</Link>
              </span>
            </h4>
            <h5>September 2016 - February 2018</h5>
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
            <div className="techs-container">
              <h5 className="techs-title">Technologies Used:</h5>
              <div className="techs">
                <ul className="techs-one">
                  <li className="tech">JavaScript (ES6)</li>
                  <li className="tech">Gulp</li>
                  <li className="tech">AngularJS 1.3</li>
                  <li className="tech">Git</li>
                  <li className="tech">HTML</li>
                </ul>
                <ul className="techs-two">
                  <li className="tech">Node.js</li>
                  <li className="tech">REST</li>
                  <li className="tech">Linux/BASH</li>
                  <li className="tech">PowerShell</li>
                  <li className="tech">CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <h4>
              <span className="job-title" itemProp="jobTitle">
                Web Developer
              </span>
              ,
              <span itemProp="worksFor">
                <Link href="http://www.liquidint.com">Liquid Interactive</Link>
              </span>
            </h4>
            <h5>November 2015 - September 2016</h5>
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
            <div className="techs-container">
              <h5 className="techs-title">Technologies Used:</h5>
              <div className="techs">
                <ul className="techs-one">
                  <li className="tech">JavaScript (ES6)</li>
                  <li className="tech">AngularJS 1.0</li>
                  <li className="tech">Sass/Less/CSS</li>
                  <li className="tech">PHP</li>
                  <li className="tech">Apache</li>
                  <li className="tech">Vagrant</li>
                  <li className="tech">Scotch Box</li>
                  <li className="tech">MySQL</li>
                  <li className="tech">Wordpress</li>
                </ul>
                <ul className="techs-two">
                  <li className="tech">Node.js</li>
                  <li className="tech">HTML</li>
                  <li className="tech">C#</li>
                  <li className="tech">NGINX</li>
                  <li className="tech">VVV</li>
                  <li className="tech">Microsoft SQL Server</li>
                  <li className="tech">HeidiSQL</li>
                  <li className="tech">Umbraco</li>
                  <li className="tech">Sitecore</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <h4>
              Software Development Intern,
              <Link href="http://www.baseballinfosolutions.com">BaseballInfoSolutions</Link>
              <span> / </span>
              <Link href="http://www.sportsinfosolutions.com">SportsInfoSolutions</Link>
            </h4>
            <h5>June 2015 - November 2015</h5>
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
            <div className="techs-container">
              <h5 className="techs-title">Technologies Used:</h5>
              <div className="techs">
                <ul className="techs-one">
                  <li className="tech">JavaScript</li>
                  <li className="tech">HTML</li>
                  <li className="tech">Microsoft SQL Server</li>
                </ul>
                <ul className="techs-two">
                  <li className="tech">ASP.NET</li>
                  <li className="tech">CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <h4>
              Software Development Intern,
              <Link href="http://www.trailkam.com">TrailKam.com</Link>
            </h4>
            <h5>January 2015 - June 2015</h5>
            <ul>
              <li>
                Worked closely with the founder of TrailKam, Bernie Graham, to get trailkam.com to a
                minimal viable product (MVP).
              </li>
              <li>Presented work at the Eastern Colleges Science Conference in Niagara, NY.</li>
            </ul>
            <div className="techs-container">
              <h5 className="techs-title">Technologies Used:</h5>
              <div className="techs">
                <ul className="techs-one">
                  <li className="tech">JavaScript</li>
                  <li className="tech">HTML</li>
                  <li className="tech">Microsoft SQL Server</li>
                </ul>
                <ul className="techs-two">
                  <li className="tech">PHP</li>
                  <li className="tech">CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <h4>Software Development Intern, BrainRush.com</h4>
            <h5>May 2014 - November 2014</h5>
            <ul>
              <li>Created static FAQ page using PHP, JavaScript, & CSS.</li>
              <li>Tested & tracked project software issues using JIRA like software.</li>
            </ul>
            <div className="techs-container">
              <h5 className="techs-title">Technologies Used:</h5>
              <div className="techs">
                <ul className="techs-one">
                  <li className="tech">JavaScript</li>
                  <li className="tech">Symfony 2</li>
                  <li className="tech">CSS</li>
                </ul>
                <ul className="techs-two">
                  <li className="tech">PHP</li>
                  <li className="tech">HTML</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <h4>Support Technician, Easton Area High School</h4>
            <h5>May 2014 - September 2014</h5>
            <ul>
              <li>
                Computer maintenance; including administration, imaging, troubleshooting, & repairs.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="misc-container" className="misc-container">
        <h2 className="misc-title">Misc.</h2>
        <div className="misc">
          <ul>
            <li>Wrote first program on apple //e in eighth grade</li>
            <li itemProp="award">All-American Wrestler</li>
            <li itemProp="award">2011 PIAA AAA Wrestling Team State Runner-up, Varsity Wrestler</li>
            <li itemProp="award">
              2011 PIAA AAAA District Champion Football Team, First Team Varsity Athlete
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
