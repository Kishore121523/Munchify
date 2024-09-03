import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { assets } from "../../assets/assets"

interface LoginPopupProps{
  setShowLogin: Dispatch<SetStateAction<boolean>>
}

const LoginPopup = ({setShowLogin}:LoginPopupProps) => {
  const [currState, setcurrState] = useState("Sign Up")

  useEffect(() => {
    document.body.classList.add("no-scroll");
    
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid animate-fadeIn">
      <form 
        className="place-self-center w-[23vw] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[12px] animate-fadeIn">
          
        <div className="flex justify-between items-center text-black">
          <h2 className="text-[2vw] font-[500] leading-tight">{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="Close Icon" className="cursor-pointer w-[16px]" />
        </div>

        <div className="flex flex-col gap-[20px] text-[14px]">
          {currState === "Sign Up" && 
          <input 
            className="border border-[#c9c9c9] outline-none p-[10px] rounded-[4px]" 
            type="text" 
            placeholder="Your Name" 
            required />
          }
          <input 
            className="border border-[#c9c9c9] outline-none p-[10px] rounded-[4px]" 
            type="email" 
            placeholder="Your Email" 
            required />
          <input 
            className="border border-[#c9c9c9] outline-none p-[10px] rounded-[4px]" 
            type="password" 
            placeholder="Password" 
            required />
        </div>

        <button 
          className="border-none p-[10px] rounded-[4px] text-white bg-tomato text-[14px] cursor-pointer">
            {currState === "Sign Up" ? "Sign Up": "Login"}
        </button>

        <div className="flex items-start gap-[8px] mt-[-15px] ">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, I agree to the terms of use & Privacy Policy.</p>
        </div>
        {currState === "Login" 
        ? 
        <p className="text-[14px]">Create a New Account? <span className="text-tomato font-[500] cursor-pointer" onClick={()=>setcurrState("Sign Up")}>Sign Up</span></p> 
        : 
        <p className="text-[14px]">Already have an Account? <span className="text-tomato font-[500] cursor-pointer" onClick={()=>setcurrState("Login")}>Login</span></p>}
      
      </form>
    </div>
  )
}

export default LoginPopup
