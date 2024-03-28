import { ProductProps } from '@/@types/productProps'
import { ButtonAddProductToShopCart } from '@/components/buttonAddProductToShopCart'
import { api } from '@/lib/axios'
import { Undo2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Product({ params }: { params: { id: string } }) {
  const getProducts = async () => {
    const { data } = await api.get(`/product/${params.id}`)

    return data.product
  }

  const response: ProductProps = await getProducts()

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

      <main className="flex flex-col sm:flex-row gap-8 p-2">
        <Image
          alt="Product image"
          src={`${api.defaults.baseURL}/${response.image}`}
          width={1000}
          height={1000}
          className="w-[240px] h-[280px] mx-auto rounded-lg"
        />

        <aside className="flex flex-col gap-1 sm:gap-3">
          <h3 className="text-display font-display text-base leading-6">
            {response.category === 'TSHIRT' ? 'camisetas' : 'canecas'}
          </h3>

          <div className="flex flex-col gap-1">
            <h1 className="text-display font-display text-3xl leading-[48px] font-light">
              {response.name}
            </h1>
            <h2 className="font-display font-semibold leading-7 text-xl">
              R$ {response.price}
            </h2>
          </div>

          <p className="sm:my-3 text-display font-display text-xs left-4">
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </p>

          <div className=" flex-1 sm:mt-8 flex flex-col gap-2">
            <h3 className="text-display font-medium text-base left-6 font-display uppercase">
              Descrição
            </h3>

            <p className="text-display text-sm leading-5">
              {response.description}
            </p>
          </div>

          <ButtonAddProductToShopCart product={response} />
        </aside>
      </main>
    </>
  )
}
