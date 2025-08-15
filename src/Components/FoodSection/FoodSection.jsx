import { BASE_URL } from "../../App";
import "./FoodSection.css";
import Button from "../Button/Button";

export default function FoodSection({ data }) {
  return (
    <div className="foodcard-container">
      <div className="foodcards container">
        {data?.map((food) => (
          <div className="foodcard" key={food.name}>
            <div className="food-img">
              <img src={BASE_URL + food.image} alt="food image" />
            </div>
            <div className="food-info">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
              <Button price={food.price.toFixed(2)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
