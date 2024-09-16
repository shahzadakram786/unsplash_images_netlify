/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const CardsLayout = ({ image, id }) => {
  console.log(image);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${image.id}`);
  };

  return (
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
          <a href={image.urls.small} key={Image.id}>
            <img
              //   className={classes.images}
              key={id}
              src={image.urls.small}
              alt={image.description || "Unsplash Image"}
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
              Price: {`$${image.likes + 200}`}
            </Typography>
          </Box>
          <Box>
            {/* <Button onClick={() => dispatch(addToCart())}>addtolick</Button> */}
            <Button onClick={handleClick}>Details</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardsLayout;
