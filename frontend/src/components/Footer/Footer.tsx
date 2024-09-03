import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <footer 
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[80px]" 
      id="footer">
      <div className="w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p className="text-[14px]">Munchify offers a curated selection of gourmet dishes delivered right to your door, enhancing your dining experience with every meal.</p>
          <div className="flex">
            <img className="w-[40px] mr-[15px]" src={assets.facebook_icon} alt="" />
            <img className="w-[40px] mr-[15px]" src={assets.twitter_icon} alt="" />
            <img className="w-[40px] mr-[15px]" src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-[1.5vw] font-[500] leading-tight text-white">COMPANY</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer text-[14px]">Home</li>
            <li className="mb-[10px] cursor-pointer text-[14px]">About us</li>
            <li className="mb-[10px] cursor-pointer text-[14px]">Delivery</li>
            <li className="mb-[10px] cursor-pointer text-[14px]">Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-[1.5vw] font-[500] leading-tight text-white">GET IN TOUCH</h2>
          <ul>
            <li className="text-[14px]">+1-212-345-2323</li>
            <li className="text-[14px]">contactmunchify@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] my-[20px] mx-0 bg-gray-400 border-none"/>
      <p className="">Copyright 2024 Munchify.com - All Right Reserved.</p>
    </footer>  
  )
}

export default Footer
