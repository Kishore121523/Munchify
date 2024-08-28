import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"

const Home = () => {
  const [category, setcategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setcategory}/>
    </div>
  )
}

export default Home
