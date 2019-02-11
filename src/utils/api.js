import axios from "axios";

export function getAllRecipes() {
  return axios.get("http://localhost:3001/recipes");
}

export function getSingleRecipe(id) {
  return axios.get(`http://localhost:3001/recipes?uuid=${id}`);
}
