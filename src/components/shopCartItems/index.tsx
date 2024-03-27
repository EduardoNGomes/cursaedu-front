'use client'

import { ShopCartProduct } from '../shopCartProduct'

export const ShopCartItems = () => {
  const items = Array.from({ length: 20 }, (_, i) => i + 1)

  return (
    <div className="flex flex-col gap-4 overflow-auto pr-2">
      {items.map((item) => (
        <ShopCartProduct key={item} />
      ))}
    </div>
  )
}
