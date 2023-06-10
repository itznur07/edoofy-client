// useAxios.js
import axios from "axios";
import { useEffect, useState } from "react";

// You can set the base URL for axios here
axios.defaults.baseURL = "http://localhost:3000/";

// The useAxios custom hook function
const useAxios = (axiosConfig) => {
  // The state variables for the response, error and loading status
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // The async function that calls axios.request and updates the state variables
  const fetchData = async (config) => {
    try {
      // Make the API request with axios
      const result = await axios.request(config);
      // Set the response state
      setResponse(result.data);
    } catch (err) {
      // Set the error state
      setError(err);
    } finally {
      // Set the loading state to false
      setLoading(false);
    }
  };

  // Use useEffect to invoke the async function once when the hook is mounted
  useEffect(() => {
    fetchData(axiosConfig);
  }, []);

  // Return the state variables from the hook function
  return { response, error, loading };
};

export default useAxios;
