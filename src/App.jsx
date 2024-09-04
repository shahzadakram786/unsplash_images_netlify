import Home from "./page/home/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./page/home/style";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
