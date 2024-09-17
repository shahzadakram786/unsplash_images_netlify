/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";

import { NavLink, useNavigate } from "react-router-dom";
// import { setImages } from "../../redux/cart/cartSlice";
// import { useDispatch } from "react-redux";

const CardsLayout = ({ index, id, urls, description, likes, images }) => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/${id}`);
  // };

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
          <a href={urls.small} key={id}>
            <img
              //   className={classes.images}
              key={id}
              src={urls.small}
              alt={description || "Unsplash Image"}
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
              Price: {`$${likes + 200}`}
            </Typography>
          </Box>
          <Box>
            {/* <Button onClick={() => dispatch(addToCart())}>addtolick</Button> */}
            <NavLink to={`/${index}`}>
              <Button>Details</Button>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardsLayout;
