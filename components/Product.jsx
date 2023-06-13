import { urlFor } from "@/lib/client"
import Link from "next/link"

export default function Product({ product: {name, price, images, slug, details} }) {
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
            <p style={{fontWeight: '400', textTransform: 'uppercase'}} className="product-name">{name}</p>
            <p style={{fontWeight: '700', color:"black"}}>${price}</p>
            <p style={{fontWeight: '100', fontSize: '0.8em'}}>{details.substring(0,30)}</p>
        </div>
    </div>
  )
}


