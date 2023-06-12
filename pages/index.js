import React from 'react';
import { client } from '@/lib/client';

import { Footer, Product, Navbar, Layout, HeroBanner} from '@/components';



const index = ({products}) => {
  return (
  <>
    <HeroBanner/>
      <div className="products-container">
        {
          products.map((product) =>
          <Product product={product} />
        )
        }
    </div>
  </>
  )
}


export const getStaticProps = async () => {
  const products = await client.fetch(`*[_type == "product"]`);

  return {
    props: {
      products
    }
  };
}

export default index