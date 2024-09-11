import React from "react";
import Header from "../header/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Header/>
    <Box>
        <Outlet/>
    </Box>    
    </>
  );
};

export default Layout;
