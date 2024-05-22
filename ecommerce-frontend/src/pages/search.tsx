import { useState } from "react"
import ProductCard from "../components/product-card";


const Search = () => {

  const [search,setSearch]=useState("");
  const [sort,setSort]=useState("");
  const [maxPrice,setMaxPrice]=useState(100000);
  const [category,setCategory]=useState("");
  const [page,setPage]=useState(1);
  
   const  addToCartHandler=()=>{};

   const isNextPage=page >1;
   const isPrevPage=page <4;

  return (
    <div className="product-search-page" >
    <aside>
      <h2>Filters</h2>
      <div>
        <h4>Sort</h4>
        <select value={sort}onChange={(e)=>setSort(e.target.value)} >

        <option value="">None</option>
        <option value="asc">Price (Low to High)</option>
        <option value="dsc">Price ( High to Low)</option>
        </select>
      </div>
      <div>
        <h4>Max Price :{maxPrice ||""}</h4>
        <input
        type="range"
        min={100}
        max={100000}
        value={maxPrice}
        onChange={(e)=>setMaxPrice(Number(e.target.value))} />

        
      </div>

      <div>
        <h4>Category</h4>
        <select value={sort}onChange={(e)=>setCategory(e.target.value)} >

        <option value="">All</option>
        <option value="">Sample 1</option>
        <option value="">Sample 2</option>
        </select>
      </div>
    </aside>
    <main>
      <h1>Products</h1>
      <input type="text" placeholder="Search by name..." 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

    <div className="search-product-list">
      <ProductCard productId="adas" 
         name="macbook" price={4500} 
         stock={456}  handler={addToCartHandler} photo="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=
         crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D" />
    </div>
    <article>
      <button 
      disabled={!isPrevPage}
        onClick={()=> setPage((prev)=>prev-1)} >
        Prev
      </button>
      <span>{page} of{4}</span>
      <button 
      disabled={!isNextPage}
      onClick={()=> setPage((prev)=>prev+1)} >
        Next
      </button>
    </article>
    </main>
    </div>
  )
}

export default Search