import { Box, Typography } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <Box
      sx={{
        // background: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2.5rem 5rem",
        minHeight: "77vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // background: "red",
        }}
      >
        <Typography varient="h1" sx={{ color: "white", fontSize: "40px" }}>
          NO ANY CART SELECTED
        </Typography>
      </Box>
    </Box>
  );
};

export default Cart;
