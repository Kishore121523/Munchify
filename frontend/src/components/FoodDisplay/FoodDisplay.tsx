import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

interface FoodDisplayProps {
  category: string;
}

const FoodDisplay = ({ category }: FoodDisplayProps) => {
  const context = useContext(StoreContext);

  if (!context) {
    return <div>Error: food_list is not available.</div>;
  }

  const { food_list } = context;

  return (
    <div className="mt-[30px]" id="food-display">
      <h2 className="text-[2vw] font-semibold leading-tight tracking-wide text-black">Top dishes near you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] mt-[30px] gap-[30px] gap-y-[50px]">
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <FoodItem 
              key={index} 
              id={item._id}
              name={item.name} 
              description={item.description}
              price={item.price}
              image = {item.image}
            />
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
