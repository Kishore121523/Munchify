import { createContext, ReactNode } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext<{ food_list: typeof food_list } | null>(null);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = (props) => {
  const contextValue = {
    food_list
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
