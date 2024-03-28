'use client'

import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import { SelectQuantityShopCart } from '../selectQuantityShopCart'
import { useAppDispatch } from '@/lib/redux/hooks'
import { decreaseItem } from '@/lib/redux/reduxFeatures/cart/cartSlice'
import { ProductPropsWithQuantity } from '@/@types/productPropsWithQuantity'
import { api } from '@/lib/axios'
import { toast } from 'react-toastify'

type ShopCartProductProps = {
  product: ProductPropsWithQuantity
}
export const ShopCartProduct = ({ product }: ShopCartProductProps) => {
  const dispatch = useAppDispatch()

  const handleRemoveItemFromCart = () => {
    dispatch(decreaseItem(product))
    toast.success('Produto removido com sucesso')
  }

  const brPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(product.price))

  return (
    <div className="flex gap-[2px] sm:gap-4 rounded-lg bg-white ">
      <Image
        alt="product image"
        src={`${api.defaults.baseURL}/${product.image}`}
        height={500}
        width={500}
        className="w-36 h-36 sm:w-64 sm:h-52 rounded-l-lg"
      />
      <div className="p-4 flex flex-col gap-3 sm:w-full">
        <div className="flex items-center justify-between">
          <h4 className="text-display text-sm sm:text-xl font-display font-light sm:leading-8">
            {product.name}
          </h4>
          <button
            onClick={handleRemoveItemFromCart}
            className="hidden sm:block"
          >
            <Trash2 className="h-5 w-5 text-red-600" />
          </button>
        </div>

        <p className="hidden lg:inline font-display font-normal text-xs text-display left-4 flex-1">
          {product.description}
        </p>

        <div className="flex flex-col-reverse sm:flex-row  justify-between items-end self-start sm:self-auto">
          <SelectQuantityShopCart product={product} />

          <span className="font-semibold sm:text-base text-xs leading-6 font-display">
            {brPrice}
          </span>
        </div>
        <button
          onClick={handleRemoveItemFromCart}
          className="sm:hidden sr-only"
        >
          <Trash2 className="h-5 w-5 text-red-600 " />
        </button>
      </div>
    </div>
  )
}
