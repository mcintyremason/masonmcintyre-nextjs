import React, { useState } from "react";
import { AppBar, Grid, Link } from "@material-ui/core";
import HamburgerNav from "../HamburgerNav";
import classNames from "classnames";
import styles from "./index.module.css";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (_: HeaderProps) => {
  const [hambugerActive, setHambugerActive] = useState(false);

  const hamburgerOnClick = () => {
    setHambugerActive(!hambugerActive);
  };

  return (
    <AppBar position="fixed" className={styles["app-bar"]}>
      <Grid container direction="column" justify="center">
        <Grid container className={styles["header"]}>
          <Grid
            container
            item
            xs={10}
            sm={6}
            direction="column"
            justify="center"
          >
            <h1 itemProp="name" className={styles["header-name"]}>
              <Link className={styles["name"]} href="/">
                <span itemProp="givenName">Mason</span>
                <span itemProp="familyName">McIntyre</span>
              </Link>
            </h1>
          </Grid>
          <Grid
            item
            xs={2}
            sm={6}
            className={styles["hamburger-nav-container"]}
          >
            <HamburgerNav active={hambugerActive} onClick={hamburgerOnClick} />
          </Grid>
          <Grid
            container
            justify="center"
            item
            xs={12}
            className={classNames(
              styles["menu-container"],
              hambugerActive ? styles["active"] : "",
            )}
          >
            <Grid
              className={styles["menu"]}
              container
              justify="center"
              direction="row"
              wrap="nowrap"
            >
              <Grid className={styles["menu-link-container"]}>
                <Link className={styles["menu-link"]} href="/resume">
                  Resume
                </Link>
              </Grid>
              <Grid className={styles["menu-link-divider"]}>|</Grid>
              <Grid className={styles["menu-link-container"]}>
                <Link className={styles["menu-link"]} href="/projects">
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
