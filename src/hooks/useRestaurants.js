import { useState } from "react";
import yelp from "../api/yelp";


export default () => {
  let [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });
  let searchResults = async (term) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      let response = await yelp.get("/search", {
        params: {
          limit: 15,
          term,
          location: "Toronto",
        },
      });
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };
  return [results, searchResults]
};
