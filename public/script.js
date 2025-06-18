const recipesList = document.getElementById("recipesList");
const searchInput = document.getElementById("searchInput");

let allRecipes = [];

async function loadRecipes() {
  try {
    const res = await fetch("/api/recipes");
    const data = await res.json();
    allRecipes = data;
    displayRecipes(allRecipes);
  } catch (err) {
    console.error("Error loading recipes:", err);
  }
}

function displayRecipes(recipes) {
  recipesList.innerHTML = "";
  if (!recipes.length) {
    recipesList.innerHTML = "<p>No recipes found. Try adding some!</p>";
    return;
  }

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}" />` : ""}
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;

    recipesList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = allRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(keyword) ||
    recipe.ingredients.toLowerCase().includes(keyword)
  );
  displayRecipes(filtered);
});

loadRecipes();
