import { createTheme } from '@material-ui/core/styles'
import { BreakpointValues } from '@material-ui/core/styles/createBreakpoints'

// This file IS for globally applied styling across a specific Material-UI component.
// Instructions on overriding Material-UI component styling, https://material-ui.com/customization/globals/#css.

const breakpoints: BreakpointValues = {
  xs: 375,
  sm: 660,
  md: 768,
  lg: 996,
  xl: 1200,
}

let customTheme = createTheme({
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      },
      h1: {
        margin: 0,
        color: 'var(--background-secondary)',
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '1.75em',
        fontWeight: 'bold',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        [`@media (min-width:${breakpoints.md}px)`]: {
          fontSize: '2.5em',
        },
      },
      h2: {
        margin: 0,
        color: 'var(--background-secondary)',
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '1.5em',
        fontWeight: 'bold',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        [`@media (min-width:${breakpoints.md}px)`]: {
          fontSize: '2em',
        },
      },
      h3: {
        margin: 0,
        color: 'var(--background-secondary)',
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '1.25em',
        fontWeight: 'bold',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        [`@media (min-width:${breakpoints.md}px)`]: {
          fontSize: '1.5em',
        },
      },
      h4: {
        margin: 0,
        color: 'var(--background-secondary)',
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '1em',
        fontWeight: 'bold',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        [`@media (min-width:${breakpoints.md}px)`]: {
          fontSize: '1.25em',
        },
      },
      h5: {
        margin: 0,
        color: 'var(--background-secondary)',
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '0.9em',
        fontWeight: 'bold',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        [`@media (min-width:${breakpoints.md}px)`]: {
          fontSize: '1em',
        },
      },
      h6: {
        margin: 0,
        color: 'var(--background-secondary)',
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '0.8em',
        fontWeight: 'bold',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        [`@media (min-width:${breakpoints.md}px)`]: {
          fontSize: '0.75em',
        },
      },
      body1: {
        margin: 0,
        fontFamily: "'San Frediano', 'BloggerSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '0.9em',
        lineHeight: '1.4em',
        [`@media (min-width:${breakpoints.md}px)`]: {
          fontSize: '1em',
          lineHeight: '1.5em',
        },
      },
    },
  },
})

// customTheme = responsiveFontSizes(customTheme)
export default customTheme
