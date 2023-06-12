import { urlFor } from "@/lib/client"
import Link from "next/link"

export default function Product({ product: {name, price, images, slug} }) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
            <img 
              src={urlFor(images && images[0]).url()} 
              alt="" 
              width={250}
              height={250}
              className="product-image"
            />
        </div>    
        </Link>  
        <div className="product-info">
            <p className="product-name">{name}</p>
            <p className="product-price">{price}$</p>
        </div>
    </div>
  )
}


