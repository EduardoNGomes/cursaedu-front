'use client'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { selectorTotalValue } from '@/lib/redux/reduxFeatures/cart/cartSelector'
import { cleanItems } from '@/lib/redux/reduxFeatures/cart/cartSlice'
import { toast } from 'react-toastify'

export const ShopCartPayment = () => {
  const totalValue = useAppSelector((state) => selectorTotalValue(state))
  const dispatch = useAppDispatch()

  const valueToPay = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValue)

  const deliveryFeeValue = 40

  const deliveryFee = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(deliveryFeeValue)

  const finalValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValue + deliveryFeeValue)

  const handleBuy = () => {
    dispatch(cleanItems())
    toast.success('Produto removido com sucesso')
  }

  return (
    <div className="bg-white h-full  py-1 py:4 px-6 rounded-t-lg flex flex-col  gap-2 sm:gap-5">
      <h2 className="mb-2 font-display font-semibold text-xl uppercase">
        Resumo do pedido
      </h2>

      <div className="flex flex-col gap-1 sm:gap-3  mb-1 sm:mb-3">
        <h4 className="flex justify-between font-display text-base text-display">
          Subtotal de produtos <span>{valueToPay}</span>
        </h4>

        <h4 className="flex justify-between font-display text-base text-display">
          Entrega <span>{deliveryFee}</span>
        </h4>
      </div>
      <div className="w-full h-[2px] bg-background"></div>

      <h4
        className="
          flex justify-between
          text-display font-display font-semibold text-base"
      >
        Total
        <span>{finalValue}</span>
      </h4>

      <div className="flex-1">
        <Button
          className="h-8 sm:h-10 bg-green-600 uppercase text-white w-full"
          onClick={handleBuy}
        >
          finalizar a compra
        </Button>
      </div>

      <footer className="uppercase underline text-display text-xs sm:text-sm font-medium pb-2">
        <ul className="grid grid-cols-2  sm:flex sm:flex-col sm:gap-3">
          <li>
            <Link href="#">Ajuda</Link>
          </li>
          <li>
            <Link href="#">reembolsos</Link>
          </li>
          <li>
            <Link href="#">entregas e frete</Link>
          </li>
          <li>
            <Link href="#">trocas e devoluções</Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}
