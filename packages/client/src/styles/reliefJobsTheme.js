const reliefJobsTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    navBackground: "#31333B",
    primary: {
      main: "#ef6c00"
    },
    secondary: {
      main: "#3949ab"
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF"
    },
    action: {
      hoverOpacity: 0.1
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Lato", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    fontSize: 14
  },
  overrides: {
    // Name of the ⚛️ component / style sheet
    MuiLinearProgress: {
      // Name of the rule
      colorPrimary: {
        backgroundColor: "#bababa"
      }
    }
  }
};

export default reliefJobsTheme;
