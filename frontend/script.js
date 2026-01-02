const moodInput = document.getElementById("moodInput");
const recommendBtn = document.getElementById("recommendBtn");
const resultSection = document.getElementById("resultSection");
const loader = document.getElementById("loader");

recommendBtn.addEventListener("click", async () => {
  const mood = moodInput.value.trim();
  if (!mood) {
    alert("Please enter your mood first 🎭");
    return;
  }

  // Reset UI
  resultSection.innerHTML = "";
  loader.classList.remove("hidden");

  try {
    const response = await fetch("http://localhost:3001/api/ai/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood }),
    });

    const data = await response.json();
    loader.classList.add("hidden");

    if (!data.recommendations || data.recommendations.length === 0) {
      resultSection.innerHTML = `<p class="col-span-full text-center text-gray-400 text-lg">No movies found 😔 Try a different mood!</p>`;
      return;
    }

    const genreHTML = `
      <div class="col-span-full text-center mb-8">
        <h2 class="text-3xl font-bold text-pink-400">
          Suggested Genre: ${data.suggestedGenre}
        </h2>
        <p class="text-gray-400 mt-1">Here are some top picks just for you 🍿</p>
      </div>
    `;

    const moviesHTML = data.recommendations
      .map(
        (movie) => `
        <div class="bg-gray-800/60 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:scale-105 transform transition-all duration-300">
          <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            alt="${movie.title}"
            class="w-full h-72 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">${movie.title}</h3>
            <p class="text-gray-400 text-sm mb-2">
              ${movie.overview ? movie.overview.slice(0, 100) + "..." : "No description available."}
            </p>
            <p class="text-gray-500 text-xs">Release Date: ${movie.release_date || "N/A"}</p>
          </div>
        </div>`
      )
      .join("");

    resultSection.innerHTML = genreHTML + moviesHTML;

    // Add animation
    ScrollReveal().reveal("#resultSection div", {
      interval: 100,
      origin: "bottom",
      distance: "40px",
      easing: "ease-out",
      opacity: 0,
    });
  } catch (error) {
    console.error(error);
    loader.classList.add("hidden");
    resultSection.innerHTML = `<p class="col-span-full text-center text-red-400 text-lg">Error fetching recommendations. Please try again later.</p>`;
  }
});
