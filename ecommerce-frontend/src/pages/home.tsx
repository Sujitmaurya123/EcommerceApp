import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const addCartHandler =()=>{};

const Home = () => {
  return (
    <div  className="home" >

      <section></section>
      <h1>Latest Products 
        <Link  to="/search" className="findmore" >More</Link>
      </h1>


      <main>

        <ProductCard productId="adas" 
         name="macbook" price={500} 
         stock={456}  handler={addCartHandler} photo="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=
         crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D" />
      </main>
    </div>
  )
}

export default Home