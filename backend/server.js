import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";


dotenv.config({ path: "./backend/.env" });
console.log("TMDB API Key:", process.env.TMDB_API_KEY);
console.log("Gemini key:", process.env.GEMINI_API_KEY);
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PopChoice backend is running...");
});
app.use("/api/movies", movieRoutes);
app.use("/api/ai", aiRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
