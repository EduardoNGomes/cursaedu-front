import { Button } from '@/components/ui/button'
import { ShoppingBag, Undo2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// My Post: {params.id}
export default function Product({ params }: { params: { id: string } }) {
  return (
    <>
      <Link
        href="/"
        className="flex mb-5 items-center gap-2 text-display font-display text-sm"
      >
        <span>
          <Undo2 className="w-5 h-5" />
        </span>
        <span>Voltar</span>
      </Link>

      <main className="flex gap-8">
        <Image
          alt="Product image"
          src="/caneca-01.jpg"
          width={1000}
          height={1000}
          className="w-[640px] h-[580px]"
        />

        <aside className="flex flex-col gap-3">
          <h3 className="text-display font-display text-base leading-6">
            Caneca
          </h3>

          <div className="flex flex-col gap-1">
            <h1 className="text-display font-display text-3xl leading-[48px] font-light">
              Caneca de cerâmica rústica
            </h1>
            <h2 className="font-display font-semibold leading-7 text-xl">
              R$ 40,00
            </h2>
          </div>

          <p className="my-3 text-display font-display text-xs left-4">
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </p>

          <div className=" flex-1 mt-8 flex flex-col gap-2">
            <h3 className="text-display font-medium text-base left-6 font-display uppercase">
              Descrição
            </h3>

            <p className="text-display text-sm leading-5">
              Aqui vem um texto descritivo do produto, esta caixa de texto
              servirá apenas de exemplo para que simule algum texto que venha a
              ser inserido nesse campo, descrevendo tal produto.
            </p>
          </div>

          <Button className="text-title text-white uppercase flex flex-row gap-3 bg-blueb">
            <span>
              <ShoppingBag className="w-[18px] h-[18px]" />
            </span>
            Adicionar ao carrinho
          </Button>
        </aside>
      </main>
    </>
  )
}
