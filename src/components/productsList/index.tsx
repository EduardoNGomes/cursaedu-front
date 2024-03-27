'use client'

import { ProductProps } from '@/@types/productProps'
import { useEffect, useState } from 'react'
import { Card } from '../card'
import { api } from '@/lib/axios'

export const ProductList = () => {
  const path = window.location.pathname

  console.log(path)

  const [products, setProducts] = useState<ProductProps[]>([])

  const getProducts = async () => {
    const { data } = await api.get(path)

    console.log(data)
    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main className="grid grid-cols-4 gap-8">
      {products.map((card, i) => (
        <Card
          id={card.id}
          name={card.name}
          price={card.price}
          image={card.image}
          description={card.description}
          key={i}
        />
      ))}
    </main>
  )
}
