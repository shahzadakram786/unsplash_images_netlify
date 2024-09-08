import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";
import axios from "axios";
import { useStyle } from "./style";
import { Button, Skeleton } from "@mui/material";

const API_URL = "https://api.unsplash.com/search/photos";
const Image_Per_Page = 12;

const Home = () => {
  const classes = useStyle();

  const searchInput = useRef("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("cats");

  useEffect(() => {
    fetchImages(query);
  }, [page, query]);

  const fetchImages = async (query) => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const result = await axios.get(
          `${API_URL}?query=${
            searchInput.current.value
          }&page=${page}&per_page=${Image_Per_Page}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImages(result.data.results);
        setTotalPages(result.data.total_pages);
        setLoading(false);

        // console.log("result = > ", result.data);
      }, 2000);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
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

    const searchQuery = searchInput.current.value || "cats";
    setQuery(searchQuery);
    setPage(1);
    setLoading(true);

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

        <Box
          className={classes.Boximages}
          sx={{
            width: "80%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {loading
            ? // Show skeleton loader while loading
              Array.from(new Array(Image_Per_Page)).map((_, index) => (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="50vh"
                  key={index}
                />
              ))
            : images.map((image) => (
                <a href={image.urls.small} key={image.id}>
                  <img
                    className={classes.images}
                    key={image.id}
                    src={image.urls.small}
                    alt={image.description || "Unsplash Image"}
                    style={{ width: "100%", height: "50vh" }}
                  />
                </a>
              ))}
        </Box>

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
