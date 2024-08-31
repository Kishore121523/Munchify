import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"

const Home = () => {
  const [category, setcategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setcategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
