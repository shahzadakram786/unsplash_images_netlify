import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box className="container" sx={{ background: "aqua" }}>
        <Box
          className="mainContainer"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "20px" }} variant="h1">
              Unsplash Images
            </Typography>
          </Box>
          <Box className="pagesTags" sx={{ display: "flex", gap: "20px" }}>
            <Typography
              variant="p"
              sx={{ fontSize: "18px" }}
              component={Link}
              to="/"
            >
              Home
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px" }}
              component={Link}
              to="about"
            >
              About
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px" }}
              component={Link}
              to="Cart"
            >
              Cart
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
