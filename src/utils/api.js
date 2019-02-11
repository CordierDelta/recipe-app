import axios from "axios";

export function getRecipes() {
  return axios.get("http://localhost:3001/recipes");
}
