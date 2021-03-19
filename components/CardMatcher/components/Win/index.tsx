import styles from "./index.module.css";
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import classNames from "classnames";

const Win = (_: any) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classNames(styles["win-container"])}
    >
      <Typography variant="h1">You Win!</Typography>
    </Grid>
  );
};

export default Win;
