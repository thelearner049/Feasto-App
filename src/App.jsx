import { useEffect, useState } from "react";
import "./App.css";
import FoodSection from "./Components/FoodSection/FoodSection";

import Navbar from "./Components/Navbar/Navbar";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFoodData() {
      setLoading(true);

      try {
        let response = await fetch(BASE_URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setData(jsonResponse);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data!");
      }
    }
    getFoodData();
  }, []);

  return (
    <main>
      <Navbar />
      <FoodSection data={data} />
    </main>
  );
};

export default App;
