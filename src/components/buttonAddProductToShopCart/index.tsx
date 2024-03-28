'use client'
import { ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'
import { useAppDispatch } from '@/lib/redux/hooks'
import { increaseItem } from '@/lib/redux/reduxFeatures/cart/cartSlice'
import { ProductProps } from '@/@types/productProps'

type ButtonAddProductToShopCartProps = {
  product: ProductProps
}

export const ButtonAddProductToShopCart = ({
  product,
}: ButtonAddProductToShopCartProps) => {
  const dispatch = useAppDispatch()

  const handleAddProductToShopCart = () => {
    dispatch(
      increaseItem({ ...product, price: Number(product.price), quantity: 1 }),
    )
  }

  return (
    <Button
      onClick={handleAddProductToShopCart}
      className="text-title text-white uppercase flex flex-row gap-3 bg-blueb"
    >
      <span>
        <ShoppingBag className="w-[18px] h-[18px]" />
      </span>
      Adicionar ao carrinho
    </Button>
  )
}
