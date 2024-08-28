import { Dispatch, SetStateAction } from "react";
import { menu_list } from "../../assets/assets"

interface ExploreMenuProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;

}

const ExploreMenu = ({category, setCategory}: ExploreMenuProps) => {
  return (
    <div>
      <div className="flex flex-col gap-[20px]" id="explore-menu">
        <h1 className="text-center text-5xl font-[500] leading-tight tracking-wide text-[#262626]">
          Our menu
        </h1>
        <p className="text-center mx-auto max-w-[60%] text-[#808080] text-xl">
          Explore a curated menu offering an exceptional selection of gourmet dishes. Our mission is to meet your cravings and elevate your dining experience with every meal.
        </p>
        <div className="flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll custom-scrollbar-hidden">
          {menu_list.map((_menuItem, _index)=>{
            return (
              <div 
                key={_index} 
                onClick={()=>setCategory(prev=>prev===_menuItem.menu_name? "All":_menuItem.menu_name)}
                className="">
                <img 
                  className={`${category === _menuItem.menu_name ? "border-[4px] border-solid border-[#ff6347] p-[2px]":""} w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] duration-200`} 
                  src={_menuItem.menu_image} 
                  alt="menu image"/>
                <p className="mt-[10px] text-[#747474] text-xl cursor-pointer">
                  {_menuItem.menu_name}
                </p>
              </div>
            )
          })}
        </div>
        <hr className="my-[10px] mx-[0px] bg-[#e2e2e2] border-none" />
      </div>
    </div>
  )
}

export default ExploreMenu
