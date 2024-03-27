'use client'

import { useAppSelector } from '@/lib/redux/hooks'
import { ShopCartProduct } from '../shopCartProduct'

export const ShopCartItems = () => {
  const { products } = useAppSelector((state) => state.cartReducer)

  return (
    <div className="flex flex-col gap-4 overflow-auto pr-2">
      {products.map((product) => (
        <ShopCartProduct key={product.id} product={product} />
      ))}
    </div>
  )
}
