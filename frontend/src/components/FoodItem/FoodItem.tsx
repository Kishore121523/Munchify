import { useContext } from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext"

interface FoodItemProps{
  id:string,
  name:string,
  price:number,
  description:string,
  image:string,
}

const FoodItem = ({id,name,price,description,image}:FoodItemProps) => {
  
  const context = useContext(StoreContext)

   if (!context) {
    return <div>Error: food_list is not available.</div>;
  }

  const {cartItems, addToCart, removeFromCart} = context

  return (
    <div className="w-[100%] m-auto rounded-[15px] shadow-[0px_0px_10px_rgba(0,0,0,0.15)] transition duration-[0.3s] animate-fadeIn">
      <div className="relative">
        <img className="w-[100%] rounded-[15px_15px_0_0]" src={image} alt="" />
        {
          !cartItems[id]
          ? 
            <img 
              className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]" 
              onClick={()=>addToCart(id)} 
              src={assets.add_icon_white} 
              alt="Plus Icon"/> 
          :
            <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
              <img 
                className="w-[30px]" 
                onClick={()=>removeFromCart(id)} 
                src={assets.remove_icon_red} 
                alt="remove"/>
              <p className="">
                {cartItems[id]}
              </p>
              <img 
                className="w-[30px]" 
                src={assets.add_icon_green} 
                onClick={()=>addToCart(id)} 
                alt="add" />
            </div>
        }
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-[500]">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="rating" />
        </div>
        <p className="text-[#676767] text-[14px]">{description}</p>
        <p className="text-tomato text-[22px] font-[500] my-[10px] mx-0">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
