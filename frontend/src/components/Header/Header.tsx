
const Header = () => {
  return (
    <div className="h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[60%] bottom-[10%] left-[6vw] animate-fadeIn z-10">
        <h2 className="text-[3.5vw] font-bold leading-tight tracking-wide text-white">
          Savor the Best Food, Right at Your Doorstep
        </h2>
        <p className="text-white text-xl">
          Delight in a curated menu that showcases a variety of mouth-watering dishes, crafted with premium ingredients by expert chefs. We’re dedicated to making your dining experience exceptional, one meal at a time.
        </p>
        <button className="border-none b-none text-textGray font-[500] py-[1vw] px-[2.3vw] bg-white 
        text-xl rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Header
