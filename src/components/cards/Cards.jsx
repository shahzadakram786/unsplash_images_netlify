import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useStyle } from "../../style";

const Cards = ({ images, addToCart }) => {
  const classes = useStyle();

  return (
    <>
      <Box
        className={classes.Boximages}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {/* {loading
            ? // Show skeleton loader while loading
              Array.from(new Array(Image_Per_Page)).map((_, index) => (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="50vh"
                  key={index}
                />
              ))
            : */}

        {images.map((Image) => (
          <>
            <Box
              sx={{
                width: "100%",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <a href={Image.urls.small} key={Image.id}>
                  <img
                    className={classes.images}
                    key={Image.id}
                    src={Image.urls.small}
                    alt={Image.description || "Unsplash Image"}
                    style={{ width: "100%", height: "50vh" }}
                  />
                </a>
              </Box>

              <Box
                sx={{
                  background: "white",
                  width: "100%",
                  display: "flex",
                  // gap: "5px",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "10px 0",
                  borderRadius: "0 0 8px 8px",
                }}
              >
                <Box>
                  <Typography sx={{ color: "black", fontSize: "" }}>
                    Price: {`$${Image.likes + 200}`}
                  </Typography>
                </Box>
                <Box>
                  <Button onClick={addToCart}>add to cart</Button>
                </Box>
              </Box>
            </Box>
          </>
        ))}
        {/* <Box> */}
      </Box>
    </>
  );
};

export default Cards;
