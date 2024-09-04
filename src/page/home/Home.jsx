import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";
import axios from "axios";
import { ImageList } from "@mui/material";
// import { FormControl, TextField } from '@mui/material'

const API_URL = "https://api.unsplash.com/search/photos";
const Image_Per_Page = 10;

const Home = () => {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const result = await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=1&per_page=${Image_Per_Page}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(result.data.results);
      console.log("result = > ", result.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchImages();
    console.log(searchInput.current.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Box
        sx={{
          backgroundColor: "yellow",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>unsplash Images</h1>
        <form onSubmit={handleSearch}>
          <input
            name="search"
            type="search"
            placeholder="Search images..."
            ref={searchInput}
          />
          <button type="submit">Search</button>
        </form>

        <Box
          className="images"
          sx={{
            width: "80%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {images.map((image) => {
            return (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.description}
                style={{ width: "100%", height: "50vh" }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
