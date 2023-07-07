import { urlFor } from "@/lib/client"
import Link from "next/link"

export default function Product({ product: {name, price, images, slug, details} }) {
  return (
    <div className="item-container">
        <div className="product-card">
        <Link href={`/product/${slug.current}`}>
            <img 
              src={urlFor(images && images[0]).url()} 
              alt="" 
              className="product-image"
            />
            </Link>
        </div>    
          
        <div className="product-info">
            <p style={{fontWeight: '400', textTransform: 'uppercase'}} className="product-name">{name}</p>
            <p style={{fontWeight: '700', color:"black"}}>${price}</p>
        </div>
        <div className="add-to-cart">
          <button>
            Agregar al carrito
          </button>
        </div>
    </div>
  )
}


