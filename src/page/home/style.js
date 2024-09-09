import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
    },
    secondary: {
      main: "#dc004e", // Customize secondary color
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
});

export const useStyle = makeStyles((theme) => ({
  title: {
    fontSize: theme.typography.h1,
    fontWeight: 600,
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  SearchInput: {
    padding: "11px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    // alignItems: "center",
    // margin: "20px 0",
  },
  images: {
    borderRadius: "10px",
    objectFit: "cover",
  },
}));
