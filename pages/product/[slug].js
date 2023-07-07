import React from 'react'
import { client, urlFor } from '@/lib/client'

import { Product } from '@/components'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

import { isMobile } from 'react-device-detect';

const ProductDetails = ({ product, products }) => {
  const { images, name, details, price } = product
  
  return (
    <>
      <section className='product-container'>
        <Splide className='product-images-carousel'
          onPaginationMounted={(splide, data) => data.list.classList.add( 'splide__pagination--custom' )}
        >
          {
            images.map((image) =>(
              <SplideSlide>
              <img
                src={urlFor(image && image).url()}
                alt=""
                width={300}
                height={300}
              />
            </SplideSlide>
          ))}
        </Splide>
        <div className="images-container">
          <div className='images-selector-container'>
          {
            images.map((image) => 
            <img
              src={urlFor(image && image).url()}
              alt=""
              width={80}
              height={80}
            />
          )}
          </div>
          <div className="image-container">
            <img
                  src={urlFor(images && images[0]).url()}
                  alt=""
                  width={300}
                  height={300}
            />
          </div>
        </div>
        <div className='information-container'>
          <h1>{name}</h1>
          <h2>${price}</h2>
          <h3>Detalles:</h3>
          <p>{details}</p>
        </div>


      </section>
      <section class="may-also-like-container">
        <h1>TAMBIEN TE PODRIA GUSTAR</h1>
        {/*
        <Splide className='may-also-like-carousel' options={{
          perPage: isMobile ? 1 : 3, rewind : true, autoplay: true,
          }}
          onPaginationMounted={(splide, data) => data.list.classList.add( 'splide__pagination--custom' )}>
          {   
            products.map((item) =>(
              <SplideSlide className='splide__slide_modified'>
                <Product product={item} />
              </SplideSlide>
          ))}
            </Splide>*/
          }
        <div className="products-container">
          {
            products.map((product) =>
            <Product product={product} />
          )
          }
        </div>
      </section>
  </>
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
  const query_products = `*[_type == "product"]`
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(query);
  const products = await client.fetch(query_products);
  return {
    props: {
      product,
      products
    }
  };
}
if (typeof window !== "undefined") {
  let isMobile = window.matchMedia("(max-width: 600px)").matches;
}

export default ProductDetails