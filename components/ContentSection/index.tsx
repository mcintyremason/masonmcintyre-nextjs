import Link from 'next/link'
import React from 'react'

type ContentSectionProps = {}

const ContentSection: React.FC<ContentSectionProps> = (_: ContentSectionProps) => {
  return (
    <div className="main">
      <div className="img-container">
        <img
          src="/img/20160720_Mt-Marcy-Stream-View_468x624.webp"
          alt="Mt. Marcy"
          width="468"
          height="624"
        />
      </div>
      <div className="about-container">
        <p className="about">
          <span id="greeting">Hey there!</span> I'm Mason McIntyre, & I'm a 28 year old currently
          living in Bethlehem, Pennsylvania. I'm a Software Engineer at
          <Link href="https://www.disneystreaming.com/">Disney Streaming Services</Link>. I develop
          & maintain React applications written in TypeScript, REST servers using Scala, architect
          systems with AWS infrastructure, promote code changes with custom Jenkins pipelines &
          initiated/lead monthly education sessions that promote collaboration with other team
          members by showcasing topics they find interesting.
        </p>
        <p>
          When I'm not in the office, I'm either hanging out with my daughter Jane Mae, my dog Luna,
          friends & family, or am on some type of adventure! My passions include reading, working
          out, & traveling; from hiking up mountains (like Mt. Marcy), to exploring foreign cities
          (such as Berlin).
        </p>
        <p>
          If you're interested in seeing some of the work I've done over the years, please visit my
          <a href="https://github.com/mcintyremason">
            GitHub <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          page!
        </p>
      </div>
    </div>
  )
}

export default ContentSection
