import { Grid } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

type FooterProps = {
  isAbsolute?: boolean;
};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { isAbsolute } = props;

  return (
    <>
      <Grid
        id="footer"
        className={classNames(
          styles["footer"],
          isAbsolute ? styles["absolute"] : "",
        )}
      >
        <meta
          itemProp="sameAs"
          content="http://www.gowilkesu.com/roster.aspx?rp_id=4947"
        />
        <meta
          itemProp="sameAs"
          content="http://www.huskers.com/ViewArticle.dbml?DB_OEM_ID=100&ATCLID=205267310"
        />
        <Grid
          container
          className={classNames(styles["footer-icons"], styles["menu"])}
        >
          <h4 itemProp="email" className={styles["footer-email"]}>
            <Link href="mailto:mason@masonmcintyre.com">
              <a>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="telephone" className={styles["footer-phone"]}>
            <Link href="tel:6104289142">
              <a>
                <i className={"fa fa-phone"} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link href="skype:o0xpopeyex0o">
              <a>
                <i className={"fa fa-skype"} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link href="https://www.linkedin.com/in/mason-mcintyre-a68ab1b2">
              <a>
                <i className={"fa fa-linkedin"} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link href="https://github.com/mcintyremason">
              <a>
                <i className={"fa fa-github"} aria-hidden="true"></i>
              </a>
            </Link>
          </h4>
        </Grid>
      </Grid>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-156934776-1"
      ></script>
      {/* <script>
  {() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(s: string, d: Date | string) {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-156934776-1");
  }}
</script> */}
    </>
  );
};

export default Footer;
