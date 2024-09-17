/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useStyle } from "../../style";
import CardsLayout from "../cardsLayout/CardsLayout";
import { setImages } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cart/cartSlice";

const Cards = ({ images }) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  dispatch(setImages(images));

  // console.log(images);

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
        {images.map((image, index) => (
          <CardsLayout {...image} key={index} index={index} images={images} />
        ))}
      </Box>
    </>
  );
};

export default Cards;
