import { createTheme } from "@mui/material";
import Sidebar from ".././assets/images/backgrounds/Sidebar.png";

const colorPalette = {
  primary: "#00a783",
  secondary: "#979797",
  lightPrimary: "#00a78380",
  white: "#FFFFFF",
  placeholder: "#6d6b6b",
  darkGrey: "#666666",
  hover: "#00a78321",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colorPalette.primary,
      contrastText: colorPalette.white,
    },
    secondary: {
      main: colorPalette.secondary,
      contrastText: colorPalette.white,
    },
  },
  typography: {
    fontFamily: "Poppins",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: 0,
          padding: "10px",
          "&:hover": {
            backgroundColor: colorPalette.hover,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          padding: "0 24px",
          height: "40px",
          fontSize: "1.125rem",
          whiteSpace: "nowrap",
          boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.16)",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "18px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "20px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          ".MuiOutlinedInput-notchedOutline": {
            fontSize: "18px",
          },
          "&.Mui-error:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d32f2f",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colorPalette.primary,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          paddingTop: "5px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: colorPalette.secondary,
          margin: "15px 0",
          borderRadius: "5px",
          "&.active": {
            backgroundColor: colorPalette.hover,
            color: colorPalette.primary,
            ".MuiListItemIcon-root svg": {
              fill: colorPalette.primary,
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          paddingTop: "5px",
          paddingBottom: "5px",
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: colorPalette.hover,
            color: colorPalette.primary,
            ".MuiListItemIcon-root svg": {
              fill: colorPalette.primary,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "40px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          ".MuiTypography-root": {
            fontWeight: "500",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: `url(${Sidebar})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
        },
      },
    },
  },
});
