import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";
import axios from "axios";
import { useStyle } from "../../style";
import { Button, Skeleton, Typography } from "@mui/material";
import Cards from "../../components/cards/Cards";

const API_URL = "https://api.unsplash.com/search/photos";
const Image_Per_Page = 12;

const Home = ({ cartCount, addToCart }) => {
  const classes = useStyle();

  const searchInput = useRef("");
  const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("cats");

  useEffect(() => {
    fetchImages(query);
  }, [page, query]);

  const fetchImages = async (query) => {
    // setLoading(true);
    if (!query) {
      console.error("Search query is empty!");
      return;
    }
    try {
      // setTimeout(async () => {
      const result = await axios.get(
        `${API_URL}?query=${query}&page=${page}&per_page=${Image_Per_Page}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(result.data.results);
      setTotalPages(result.data.total_pages);

      // setLoading(false);
      // console.log("result = > ", result.data);
      // }, 2000);
    } catch (error) {
      console.error("Error fetching images:", error);

      // setLoading(false);
    }
  };

  //   for initial images
  useEffect(() => {
    // Set the default value for search input and fetch initial images
    if (searchInput.current) {
      searchInput.current.value = query; // Set initial value to "cats"
    }
    fetchImages(query);
  }, []);

  //   for handle search
  const handleSearch = (event) => {
    event.preventDefault();

    const searchQuery = searchInput.current.value.trim() || "cats";
    setQuery(searchQuery);
    setPage(1);
    // setLoading(true);

    console.log(searchInput.current.value);
  };

  console.log("page", page);
  return (
    <Box
      className={classes.BoxContainer}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <Box
        className={classes.BoxMainContainer}
        sx={{
          //   backgroundColor: "yellow",
          width: "80%",
          display: "flex",
          gap: "2rem",
          padding: "20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className={classes.title}>unsplash Images</h1>
        <form onSubmit={handleSearch} className={classes.form}>
          <input
            name="search"
            type="search"
            placeholder="Search images..."
            ref={searchInput}
            className={classes.SearchInput}
          />
          <button type="submit" className={classes.Searchbutton}>
            Search
          </button>
        </form>

        <Cards images={images} addToCart={addToCart} />

        <Box>
          {page > 1 && (
            <Button onClick={() => setPage(page - 1)}>Previous</Button>
          )}
          {page < totalPages && (
            <Button onClick={() => setPage(page + 1)}>Next</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
