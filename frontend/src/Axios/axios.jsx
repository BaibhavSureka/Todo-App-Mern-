import axios from "axios";

// Use an environment variable for the base URL
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000/api", // Default to localhost if the environment variable is not set
});

export default instance;
