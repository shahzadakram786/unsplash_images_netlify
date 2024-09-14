import { ThemeProvider } from "@mui/material";
import { theme } from "./page/home/style";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/Store";

const App = () => {
  const [cartCount, setCartCount] = useState(1);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    console.log("clicking");
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} context={{ addToCart, cartCount }} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
