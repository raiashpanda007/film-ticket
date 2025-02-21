import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
const initialState = {
    movies: [
        {
            id: 1,
            name: "The Shawshank Redemption (1994)",
            img: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/366/2024/10/16145936/9cqNxx0GxF0bflZmeSMuL5tnGzr-scaled.jpg"

        },
        {
            id: 2,
            name: "The Godfather (1972)",
            img:"https://imgs.search.brave.com/GwXAHbgNGk_zg7mV64IHsmC22RTvLwZD3wHgvXOHVo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HRXdZamd3/T0dRdFlqZzVaUzAw/TmpjMUxUazJaR0V0/TTJRd1pXUTJOamRo/WlRFNVhrRXlYa0Zx/Y0djQC5qcGc"

        },
        {
            id: 3,
            name: "The Dark Knight (2008)",
            img:"https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
        },
        {
            id: 4,
            name:"The Avengers Endgame (2019)",
            img:"https://www.themoviedb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
        },
    ]
}
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {}
});
export default moviesSlice.reducer;

