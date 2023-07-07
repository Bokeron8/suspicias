// schemas/product.js
export default {
    name: 'product',
    type: 'document',
      title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'details',
        type: 'string',
        title: 'Details'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name'
        }
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'image'}],
        options: {
          hotspot: true
        }
      }
    ]
  }