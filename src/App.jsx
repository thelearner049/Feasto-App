import { useEffect, useState } from "react";
import "./App.css";
import FoodSection from "./Components/FoodSection/FoodSection";

import Navbar from "./Components/Navbar/Navbar";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  let [data, setData] = useState(null);
  let [filteredData , setFilteredData]= useState(null);
  let [selectedData, setSelectedData] = useState(null);
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
        setFilteredData(jsonResponse);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data!");
      }
    }
    getFoodData();
  }, []);


  function searchFood(event){
    let searchValue = event.target.value;

    if(searchValue == ""){
      setFilteredData(null);
    }

    const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredData(filter);
  }

  function selectFood(type){

    if(type == "all"){
      setFilteredData(data);
      setSelectedData("all");
      return;
    }

    const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSelectedData(type);
  }

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>

  return (
    <main>
      <Navbar searchFood={searchFood} selectFood={selectFood}/>
      <FoodSection data={filteredData} />
    </main>
  );
};

export default App;
