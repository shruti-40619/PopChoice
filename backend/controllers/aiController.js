import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const getMovieRecommendation = async (req, res) => {
  const { mood } = req.body;

  try {
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Suggest 3 popular movie genres or themes for a user who is feeling ${mood}. Respond in a comma-separated list.`
              }
            ]
          }
        ]
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    const text =
      geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    console.log("Gemini API text:", text);

    const genres = text.split(",").map((g) => g.trim());
    const firstGenre = genres[Math.floor(Math.random() * genres.length)];

    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const genreResponse = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: firstGenre,
      },
    });

    const movies = genreResponse.data.results.slice(0, 5);

    res.json({
      suggestedGenre: firstGenre,
      recommendations: movies,
    });
  } catch (error) {
    console.error(
      error.response?.data || error.message || "Unknown error from AI or TMDB"
    );
    res.status(500).json({ error: "Failed to get AI recommendation" });
  }
};
