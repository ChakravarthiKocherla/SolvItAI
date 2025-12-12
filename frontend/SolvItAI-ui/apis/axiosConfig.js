import axios from "axios";

// Your backend URL (change to your IP if testing on a device)
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Android emulator OR use your machine IP
  timeout: 10000,
});

// Example API call method
export const askQuestion = async (question) => {
  try {
    const response = await API.post("/questions/askQuestion", { question });
    return response.data;
  } catch (error) {
    console.error("Ask API Error:", error.message);
    throw error;
  }
};

export default API;
