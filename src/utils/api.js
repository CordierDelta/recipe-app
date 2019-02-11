import axios from "axios";

export function getAllRecipes() {
  return axios.get("http://localhost:3001/recipes");
}
