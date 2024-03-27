import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import { SelectQuantityShopCart } from '../selectQuantityShopCart'

export const ShopCartProduct = () => {
  return (
    <div className="flex gap-4 rounded-lg bg-white">
      <Image
        alt="product image"
        src="/caneca-01.jpg"
        height={500}
        width={500}
        className="w-64 h-52 rounded-l-lg"
      />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h4 className="text-display text-xl font-display font-light leading-8">
            Caneca de cerâmica rústica
          </h4>
          <button>
            <Trash2 className="h-5 w-5 text-red-600" />
          </button>
        </div>

        <p className="font-display font-normal text-xs text-display left-4 flex-1">
          Aqui vem um texto descritivo do produto, esta caixa de texto servirá
          apenas de exemplo para que simule algum texto que venha a ser inserido
          nesse campo, descrevendo tal produto.
        </p>

        <div className="flex justify-between items-end ">
          <SelectQuantityShopCart />

          <span className="font-semibold text-base leading-6 font-display">
            R$ 40,00
          </span>
        </div>
      </div>
    </div>
  )
}
