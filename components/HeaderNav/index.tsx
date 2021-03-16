import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";

type HeaderNavProps = {};

const HeaderNav: React.FC<HeaderNavProps> = (_: HeaderNavProps) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const hamburgerOnClick = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  return (
    <div
      id="header-container"
      className={classNames(
        "header-container",
        isHamburgerActive ? "active" : "",
      )}
    >
      <div id="header" className="header">
        <h1 className="header-name">
          <a itemProp="name" href="/">
            <span itemProp="givenName">Mason</span>
            <span itemProp="familyName">McIntyre</span>
          </a>
        </h1>
        <div className="header-nav">
          <ul>
            <li>
              <h5>
                <Link href="/resume">Resume</Link>
              </h5>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <h5>
                <Link href="/projects">Projects</Link>
              </h5>
            </li>
          </ul>
          <div
            id="hamburger"
            className={classNames(
              "hamburger",
              isHamburgerActive ? "active" : "",
            )}
            onClick={hamburgerOnClick}
          >
            <div></div>
          </div>
        </div>
        <div
          id="mobile-nav-container"
          className={classNames(
            "mobile-nav-container",
            isHamburgerActive ? "active" : "",
          )}
        >
          <ul>
            <li>
              <h2>
                <Link href="/resume">Resume</Link>
              </h2>
            </li>
            <li>
              <h2>
                <span>|</span>
              </h2>
            </li>
            <li>
              <h2>
                <Link href="/projects">Projects</Link>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
