import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <>
      <Box
        className="container"
        sx={{
          position: "sticky",
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
          <Box
            className="pagesTags"
            sx={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
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
            <Box sx={{ position: "relative" }}>
              <FaShoppingCart
                style={{ color: "aqua", fontSize: "1.5rem", cursor: "pointer" }}
              />
              <span
                style={{
                  fontSize: "10px",
                  background: "#1976d2",
                  borderRadius: "50%",
                  color: "black",
                  padding: "6px 6px",
                  textAlign: "center",
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  zIndex: "10",
                }}
              >
                <strong>{cartCount}</strong>
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
