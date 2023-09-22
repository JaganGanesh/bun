import axios from "Axios";

async function fetchUser(user) {
  const response = await axios.get("https://api.github.com/users/" + user);
  return response.data;
}

export default fetchUser;
