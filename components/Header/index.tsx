import React, { useState } from "react";
import { AppBar, Grid, Link } from "@material-ui/core";
import classNames from "classnames";
import HamburgerNav from "../HamburgerNav";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (_: HeaderProps) => {
  const [hambugerActive, setHambugerActive] = useState(false);

  const hamburgerOnClick = () => {
    setHambugerActive(!hambugerActive);
  };

  return (
    <AppBar position="fixed" className="app-bar">
      <Grid container direction="column" justify="center">
        <Grid container className="header">
          <Grid
            container
            item
            xs={10}
            sm={6}
            direction="column"
            justify="center"
          >
            <h1 className="header-name">
              <Link itemProp="name" className="name" href="/">
                <span itemProp="givenName">Mason</span>
                <span itemProp="familyName">McIntyre</span>
              </Link>
            </h1>
          </Grid>
          <Grid item xs={2} sm={6} className="hamburger-nav-container">
            <HamburgerNav active={hambugerActive} onClick={hamburgerOnClick} />
          </Grid>
          <Grid
            container
            justify="center"
            item
            xs={12}
            className={classNames(
              "menu-container",
              hambugerActive ? "active" : "",
            )}
          >
            <Grid
              className="menu"
              container
              justify="center"
              direction="row"
              wrap="nowrap"
            >
              <Grid className="menu-link-container">
                <Link className="menu-link" href="/resume">
                  Resume
                </Link>
              </Grid>
              <Grid className="menu-link-divider">|</Grid>
              <Grid className="menu-link-container">
                <Link className="menu-link" href="/projects">
                  Projects
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
