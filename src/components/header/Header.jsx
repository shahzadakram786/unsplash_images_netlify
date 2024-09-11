import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Box className="container" sx={{ background: "blue" }}>
        <Box className="mainContainer" sx={{ background: "white" }}>
          <Box>
            <Typography>Unsplash Images</Typography>
          </Box>
          <Box className="pagesTags">
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Cart</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
