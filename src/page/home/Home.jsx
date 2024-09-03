import React from 'react'
import Box from '@mui/material/Box'
import { FormControl, TextField } from '@mui/material'


const Home = () => {





    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target.search.value)
    }


    return (
        <Box sx={{ width: "100%", hight: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box>
                <h1>unsplash Images</h1>
                <form onSubmit={handleSearch} >
                    {/* <FormControl> */}
                    <input name='search' type="search" placeholder="Search images..." />
                    {/* </FormControl> */}
                    <button type='submit'>Search</button>
                </form>

            </Box>
        </Box>
    )
}

export default Home
