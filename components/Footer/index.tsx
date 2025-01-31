import { Grid2 } from '@mui/material'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from './index.module.css'

type FooterProps = {
  isAbsolute?: boolean
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { isAbsolute } = props

  return (
    <Grid2 className={classNames(styles['footer-container'], isAbsolute ? styles['absolute'] : '')}>
      <Grid2 id="footer" className={classNames(styles['footer'])}>
        <meta itemProp="sameAs" content="http://www.gowilkesu.com/roster.aspx?rp_id=4947" />
        <meta
          itemProp="sameAs"
          content="http://www.huskers.com/ViewArticle.dbml?DB_OEM_ID=100&ATCLID=205267310"
        />
        <Grid2 container className={classNames(styles['footer-icons'], styles['menu'])}>
          <h4 itemProp="email" className={styles['footer-email']}>
            <Link legacyBehavior href="mailto:mason@masonmcintyre.com">
              <a aria-label="email">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="telephone" className={styles['footer-phone']}>
            <Link legacyBehavior href="tel:6104289142">
              <a aria-label="telephone">
                <i className={'fa fa-phone'} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link legacyBehavior href="skype:o0xpopeyex0o">
              <a aria-label="skype">
                <i className={'fa fa-skype'} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link legacyBehavior href="https://www.linkedin.com/in/mason-mcintyre-a68ab1b2">
              <a aria-label="LinkedIn">
                <i className={'fa fa-linkedin'} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link legacyBehavior href="https://github.com/mcintyremason">
              <a aria-label="GitHub">
                <i className={'fa fa-github'} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default Footer
