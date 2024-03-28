import { ProductProps } from '@/@types/productProps'
import { Card } from '@/components/card'
import { PaginationComponent } from '@/components/pagination'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { api } from '@/lib/axios'

import { headers } from 'next/headers'
import Link from 'next/link'

export default async function Category({
  params,
}: {
  params: { type: string }
}) {
  const headersList = headers()
  const headerUrl = headersList.get('x-url') || ''

  const query = headerUrl.split('?')[1]

  const getProducts = async () => {
    const response = await api.get(`/category/${params.type}?${query}`)

    if (response.status !== 200) {
      console.log(response.data)
    }
    return response.data
  }

  const response = await getProducts()

  return (
    <div className="flex flex-col gap-4 pb-10 overflow-auto px-4">
      <nav className="flex flex-col sm:flex-row justify-between items-start">
        <ul className="flex gap-4 sm:gap-10 font-display uppercase text-display text-base font-semibold ">
          <li>
            <Link
              className="pb-1 border-b-4 transition-all border-b-transparent duration-300 hover:border-b-orangerlow hover:text-black"
              href="/"
            >
              todos <span className="hidden sm:inline">os produtos</span>
            </Link>
          </li>
          <li>
            <Link
              className={`pb-1 border-b-4 transition-all duration-300 
              ${params.type === 'tshirt' ? 'border-b-orangerlow text-black' : 'border-b-transparent hover:text-black'}`}
              href="/category/tshirt"
            >
              camisetas
            </Link>
          </li>
          <li>
            <Link
              className={`pb-1 border-b-4 transition-all duration-300 
              ${params.type === 'mug' ? 'border-b-orangerlow text-black' : 'border-b-transparent hover:text-black'}`}
              href="/category/mug"
            >
              canecas
            </Link>
          </li>
        </ul>

        <div className="self-end">
          <div className="flex justify-between sm:flex-col gap-6 pt-1">
            <Select>
              <SelectTrigger className="w-[120px] bg-transparent border-none focus:ring-1 focus:ring-orangerlow focus:ring-offset-orangerlow text-display text-sm font-display gap-1 p-1">
                <SelectValue placeholder="Organizar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="new"
                    className="text-display text-sm font-display"
                  >
                    Novidades
                  </SelectItem>
                  <SelectItem
                    value="lt"
                    className="text-display text-sm font-display"
                  >
                    Preço: Maior - menor
                  </SelectItem>
                  <SelectItem
                    value="gt"
                    className="text-display text-sm font-display"
                  >
                    Preço: Menor - maior
                  </SelectItem>
                  <SelectItem
                    value="sell"
                    className="text-display font-display"
                  >
                    Mais vendidos
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <PaginationComponent
              numberOfPages={response.totalCount / 12}
              currentUrl={`/?${params}`}
            />
          </div>
        </div>
      </nav>

      <main className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {response.products.map((card: ProductProps) => (
          <Card
            id={card.id}
            name={card.name}
            price={card.price}
            image={card.image}
            category={card.category}
            description={card.description}
            key={card.id}
          />
        ))}
      </main>

      <footer className="self-end">
        <PaginationComponent
          numberOfPages={response.totalCount / 12}
          currentUrl={`/?${params}`}
        />
      </footer>
    </div>
  )
}
