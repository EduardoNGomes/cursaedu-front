import { ShopCartInfo } from '@/components/shopCartInfo'
import { ShopCartItems } from '@/components/shopCartItems'
import { ShopCartPayment } from '@/components/shopCartPayment'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 flex-1 gap-8 overflow-hidden">
      <main className="flex flex-col gap-5 col-span-2 row-span-2 overflow-hidden pb-5">
        <Link
          href="/"
          className="flex mb-5 items-center gap-2 text-display font-display text-sm"
        >
          <span>
            <Undo2 className="w-5 h-5" />
          </span>
          <span>Voltar</span>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="uppercase font-display font-medium text-title text-2xl left-9">
            Seu carrinho
          </h1>
          <ShopCartInfo />
        </div>

        <ShopCartItems />
      </main>
      <aside className="mt-3 row-span-2">
        <ShopCartPayment />
      </aside>
    </div>
  )
}
