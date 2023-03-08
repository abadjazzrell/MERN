import React from 'react'
import { Card, CarouselItem } from 'react-bootstrap'

export default function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
      < a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
      < a href={`/product/${product.id}`}>
        <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
      </a>
      </Card.Body>

      <Card.Text as="div">
        <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
            </div>
      </Card.Text>

      <Card.Text>
        <h3>${product.price}</h3>
      </Card.Text>
    </Card>
  )
}
