import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext"

const PlaceOrder = () => {
  const context = useContext(StoreContext)

  if(!context){
    return <div>Error: food_list is not available.</div>;
  }

  const {getTotalCartAmount} = context

  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="w-[100%] max-w-[max(500px,_30%)]">
        <p className="text-[30px] font-[600] mb-[50px]">Delivery Information</p>
        <div className="flex gap-[10px]">
          <input 
            className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" 
            type="text" 
            placeholder="First Name" />
          <input 
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" 
          type="text" 
          placeholder="Last Name" />
        </div>
        <input 
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" 
          type="email" 
          placeholder="Email" />
        <input 
          className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" 
          type="text" 
          placeholder="Street" />
        <div className="flex gap-[10px]">
          <input className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" type="text" placeholder="City" />
          <input className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" type="text" placeholder="State" />
        </div>
        <div className="flex gap-[10px]">
          <input className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" type="text" placeholder="Postal Code" />
          <input className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" type="text" placeholder="Country" />
        </div>
        <input className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-tomato" type="text" placeholder="Phone" />
      </div>

      <div className="w-full max-w-[max(40%,_500px)]">
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
              <p>$ {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="w-[100%] h-[1px] my-[10px] mx-0 bg-[#e2e2e2] border-none"/>
            <div className="flex justify-between text-[#555555]">
              <p>Total</p>
              <p>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button 
            className="border-none text-white bg-tomato w-[15vw] py-[12px] px-0 rounded-[4px] cursor-pointer mt-[30px]">
              Pay
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
