import React from 'react'
import { client, urlFor } from '@/lib/client'

const ProductDetails = ({ product }) => {
  const { images, name, details, price } = product
  
  return (
    <div className='product-container'>
      <div class="product-card image-container">
        <img
              src={urlFor(images && images[0]).url()}
              alt=""
              width={300}
              height={300}
        />
      </div>
      <div className='information-container'>
        <h1>{name}</h1>
        <h2>{price}$</h2>
        <h3>Detalles:</h3>
        <p>{details}</p>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`;
  const products = await client.fetch(query);
  
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(query);
  return {
    props: {
      product
    }
  };
}

export default ProductDetails