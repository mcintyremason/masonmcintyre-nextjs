import Link from "next/link";
import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = (_: FooterProps) => {
  return (
    <>
      <div id="footer" className="footer">
        <meta
          itemProp="sameAs"
          content="http://www.gowilkesu.com/roster.aspx?rp_id=4947"
        />
        <meta
          itemProp="sameAs"
          content="http://www.huskers.com/ViewArticle.dbml?DB_OEM_ID=100&ATCLID=205267310"
        />
        <div className="footer-icons">
          <h4 itemProp="email" className="footer-email">
            <Link href="mailto:mason@masonmcintyre.com">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </Link>
          </h4>
          <h4 itemProp="telephone" className="footer-phone">
            <Link href="tel:6104289142">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link href="skype:o0xpopeyex0o">
              <i className="fa fa-skype" aria-hidden="true"></i>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link href="https://www.linkedin.com/in/mason-mcintyre-a68ab1b2">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </h4>
          <h4 itemProp="sameAs">
            <Link href="https://github.com/mcintyremason">
              <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
          </h4>
        </div>
      </div>

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
      {/* <script type="text/javascript" src="/js/root/index.js"></script> */}
      {/* <script type="text/javascript" src="/js/main/main.js"></script> */}
    </>
  );
};

export default Footer;
