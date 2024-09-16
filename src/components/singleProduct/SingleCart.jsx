/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const SingleCart = ({ image }) => {
  const { Id } = useParams();
  const Images = image.find((data) => data.Id === String(Id));

  return (
    <>
      <Box>
        <Box>
          <Box className="imagesBox">
            <img src={Images.urls.full} alt={Images.description} />
          </Box>
          <Box className="details"> Add to cart</Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleCart;
