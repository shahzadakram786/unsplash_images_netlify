import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        // background: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2.5rem 5rem",
        minHeight: "78.5vh",
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
          About Us
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          About Unsplash Images: This is a simple web application that fetches
          images from the Unsplash API and displays them in a responsive grid
          layout. It uses React, Material-UI, and Axios for the frontend and
          backend functionality. The Unsplash API is used to fetch images based
          on search queries and the fetched images are displayed in a grid
          layout. The application uses the useEffect hook to fetch images from
          the Unsplash API when the component mounts and updates the images when
          the search query changes. The application also includes a search bar
          to allow users to search for images by keywords. The images are
          fetched with a maximum of 12 images per page and are displayed with a
          maximum width of 200 pixels. The application also includes a loading
          skeleton while fetching images and displays an error message if the
          API request fails. The application is designed with a responsive and
          user-friendly interface using Material-UI's responsive breakpoints and
          grid layout. The application is
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
