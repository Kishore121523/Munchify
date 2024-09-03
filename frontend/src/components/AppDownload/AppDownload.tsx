import { assets } from "../../assets/assets"

const AppDownload = () => {
  return (
    <div className="flex flex-col mt-[80px] text-[3vw] font-[500]" id="app-download">
      <p className="text-center">For Better Experience Download<br /></p>
      <span className="text-center mt-[-10px] text-tomato font-semibold">Munchify Mobile App</span> 
      <div className="flex justify-center items-center mt-[20px] gap-[30px]">
        <img 
          className="w-[30vw] max-w-[200px] transition duration-500 cursor-pointer hover:scale-[1.05]" 
          src={assets.play_store} 
          alt="playstore" />
        <img 
          className="w-[30vw] max-w-[200px] transition duration-500 cursor-pointer hover:scale-[1.05]" 
          src={assets.app_store} 
          alt="appstore" />
      </div>
    </div>
  )
}

export default AppDownload
