'use client'

import { ProductProps } from '@/@types/productProps'
import { useEffect, useState } from 'react'
import { Card } from '../card'
import { api } from '@/lib/axios'

export const ProductList = () => {
  const path = window.location.pathname

  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get(path)

      setProducts(data.products)
    }
    getProducts()
  }, [path])

  return (
    <main className="grid grid-cols-4 gap-8">
      {products.map((card, i) => (
        <Card
          id={card.id}
          name={card.name}
          price={card.price}
          image={card.image}
          description={card.description}
          category={card.category}
          key={i}
        />
      ))}
    </main>
  )
}
