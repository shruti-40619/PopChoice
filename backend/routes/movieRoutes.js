import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

router.get("/trending", async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/week`, {
      params: { api_key: process.env.TMDB_API_KEY },
    });
    res.json(response.data.results);
 } catch (error) {
  if (error.response) {
    console.error("TMDB Error:", error.response.status, error.response.data);
  } else {
    console.error("Request Error:", error.message);
  }
  res.status(500).json({ error: "Failed to fetch movies" });
}

});

export default router;
