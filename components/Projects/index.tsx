import Link from 'next/link'
import React from 'react'

type ProjectsProps = {}

const Projects: React.FC<ProjectsProps> = (_: ProjectsProps) => {
  return (
    <div className="main">
      <div className="projects-container">
        <h4>
          <Link href="https://github.com/mcintyremason">
            <span>
              GitHub <i className="fa fa-github" aria-hidden="true"></i>
            </span>
          </Link>
        </h4>
        <h4 className="project">
          <Link href="https://cryptoget.dev">Crypto Get - cryptoget.dev</Link>
        </h4>
        <h4 className="project">
          <Link href="/projects/card-matcher/">Card Matcher</Link>
        </h4>
        <h4 className="project">
          <Link href="/projects/senior-project">Senior Project</Link>
        </h4>
        <h4 className="project">
          <Link href="/projects/draw">Draw</Link>
        </h4>
      </div>
    </div>
  )
}

export default Projects
