import {useEffect, useState} from "react"
import ProductCard from "./ProductCard.jsx"
//useEffect is used to handle side effects on the page

function LearnUseEffect() {
  const [counter, setCounter]= useState(0)
  const [products, setProducts] = useState([])

  const fetchProducts = async() => {
    const res = await fetch("https://fakestoreapi.com/products")
    const products = await res.json()
    console.log(products)
    setProducts(products)
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])


  return(
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default LearnUseEffect
