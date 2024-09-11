import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box
        className="container"
        sx={{
          padding: "2px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <Box
          className="mainContainer"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            // background: "yellow",
            width: "80%",
            borderBottom: "1px solid white",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "25px", color: "aqua", cursor: "pointer" }}
              variant="h1"
            >
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
