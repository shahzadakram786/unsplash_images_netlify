/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";

const SingleCart = () => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.cart.images);
  const { id } = useParams();

  const Images = images && images[id];
  console.log(Images);

  if (!Images) {
    return <Box>Image not found or loading...</Box>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "red",
          Padding: "53px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "row",
            alignItems: "center",
            gap: "2rem",
            backgound: "aqua",
            flexWrap: "wrap",
          }}
        >
          <Box
            className="imagesBox"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Images.urls.small} alt={Images.description} />
          </Box>

          <Box
            className="details"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h3>{Images.description}</h3>
              <h4>Author: {Images.user.name}</h4>
              <h4>Likes: {Images.likes}</h4>
            </Box>
            <Button onClick={() => dispatch(addToCart())}>Add To Cart</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleCart;
