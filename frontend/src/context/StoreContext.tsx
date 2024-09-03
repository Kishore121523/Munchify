import { createContext, ReactNode, useState } from "react";
import { food_list } from "../assets/assets";

// Define the shape of the cart items
interface CartItems {
  [key: string]: number;
}

interface StoreContextProps {
  food_list: typeof food_list;
  cartItems: CartItems;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
}

interface StoreContextProviderProps {
  children: ReactNode;
}

// Creating the context
export const StoreContext = createContext<StoreContextProps | null>(null);

const StoreContextProvider: React.FC<StoreContextProviderProps> = (props) => {
  const [cartItems, setcartItems] = useState<CartItems>({});

  const addToCart = (itemId: string) => {
    setcartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,  // Add to cart or increment quantity
    }));
  };

  const removeFromCart = (itemId: string) => {
    setcartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        const itemInfo = food_list.find((product)=> product._id === item)
        totalAmount += itemInfo!.price * cartItems[item]
      }
    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
