import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Cards from "./Cards";
import UserData from "./data";

const Search = () => {
  const [inputData, setInputData] = useState("");
  const [filteredData, setFilteredData] = useState(UserData);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setInputData(searchTerm);
    filterData(searchTerm);
  };

  const filterData = (searchTerm) => {
    const filtered = UserData.filter((value) =>
      value.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleClick = (e) => {
    e.preventDefault();
    filterData(inputData);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "white",
        boxShadow: "1px 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "30px",
        borderRadius: "5px",
      }}
    >
      <form style={{ display: "flex", width: "80%" }}>
        <input
          style={{
            width: "100%",
            padding: "6px",
            background: "#F8FAFC",
            border: "none",
            borderRadius: "5px",
          }}
          onChange={handleChange}
          type="text"
          value={inputData}
        />{" "}
        <Button
          style={{
            background: "#10B981",
            border: "none",
            color: "white",
            borderRadius: "0px 5px 5px 0",
            padding: "10px",
          }}
          onClick={handleClick}
        >
          Search{" "}
        </Button>{" "}
      </form>{" "}
      <Cards data={filteredData} />{" "}
    </Box>
  );
};

export default Search;
