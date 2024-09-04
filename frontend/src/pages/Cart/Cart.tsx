import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const context = useContext(StoreContext)
  const navigate = useNavigate()

  if(!context){
    return <div>Error: food_list is not available.</div>;
  }

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = context


  return (
    <div className="mt-[100px]">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-textGray text-[12px]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="w-[100%] h-[1px] bg-[#b4b3b3] border-none" />
        {food_list.map((item)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
                <div 
                  className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-textGray text-[12px] my-[10px] mx-0"
                  >
                  <img className="w-[80px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=> removeFromCart(item._id)} className="text-[20px] cursor-pointer text-tomato">x</p>
                </div>
                <hr className="w-[100%] h-[1px] my-[10px] mx-0 bg-[#e2e2e2] border-none" />
              </div>
            )
          }
        })}
      </div>
      <div className="mt-[80px] flex justify-between gap-[12vw]">
        <div className="flex flex-1 flex-col gap-[20px]">
          <h2 className="text-[2vw] font-semibold leading-tight">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555555]">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr className="w-[100%] h-[1px] my-[10px] mx-0 bg-[#e2e2e2] border-none" />
            <div className="flex justify-between text-[#555555]">
              <p>Delivery Free</p>
              <p>$ {2}</p>
            </div>
            <hr className="w-[100%] h-[1px] my-[10px] mx-0 bg-[#e2e2e2] border-none"/>
            <div className="flex justify-between text-[#555555]">
              <p>Total</p>
              <p>$ {getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button 
            onClick={()=> navigate('/order')}
            className="border-none text-white bg-tomato w-[15vw] py-[12px] px-0 rounded-[4px] cursor-pointer">
              Checkout
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#555555]">Enter Promo Code</p>
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]"> 
              <input className="bg-transparent border-none outline-none pl-[10px]" type="text" placeholder="Promo Code" />
              <button className="w-[10vw] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
