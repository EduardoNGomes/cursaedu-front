'use client'

import { useAppSelector } from '@/lib/redux/hooks'
import {
  selectorTotalProductsQuantity,
  selectorTotalValue,
} from '@/lib/redux/reduxFeatures/cart/cartSelector'

export const ShopCartInfo = () => {
  const totalQuantityItem = useAppSelector((state) =>
    selectorTotalProductsQuantity(state),
  )

  const totalValue = useAppSelector((state) => selectorTotalValue(state))

  const valueToPay = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValue)

  return (
    <p className="font-display text-base font-light leading-6">
      Total ({totalQuantityItem}){' '}
      {totalQuantityItem > 1 ? 'produtos' : 'produto'}
      <span className="font-medium"> {valueToPay}</span>
    </p>
  )
}
