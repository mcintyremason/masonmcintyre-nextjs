import * as React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import HomePage from "./components/HomePage/index";
// import "./css/global.css";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#58b2fd",
      contrastText: "#ffffff",
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => (
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>
);

export default App;
