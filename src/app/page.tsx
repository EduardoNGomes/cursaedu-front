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
import Link from 'next/link'

const mockCard = [
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
  {
    id: '123',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 40,00',
    description: 'lorem ipsum dolor sit amet, consectetur',
    image: '/caneca-01.jpg',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pb-10 overflow-auto px-4">
      <nav className="flex justify-between items-start ">
        <ul className="flex gap-10 font-display uppercase text-display text-base font-semibold">
          <li>
            <Link
              className="pb-1 border-b-4 border-b-transparent transition-all duration-300  hover:border-b-orangerlow hover:text-title hover:text-black "
              href="/"
            >
              todos os produtos
            </Link>
          </li>
          <li>
            <Link
              className="pb-1 border-b-4 border-b-transparent transition-all duration-300  hover:border-b-orangerlow hover:text-title hover:text-black"
              href="/category?category=tshirt"
            >
              camisetas
            </Link>
          </li>
          <li>
            <Link
              className="pb-1 border-b-4 border-b-transparent transition-all duration-300  hover:border-b-orangerlow hover:text-title hover:text-black"
              href="/category?category=mug"
            >
              canecas
            </Link>
          </li>
        </ul>

        <div>
          <div className="flex flex-col gap-6">
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
              numberOfPages={mockCard.length / 12}
              urlPages="#"
            />
          </div>
        </div>
      </nav>

      <main className="grid grid-cols-4 gap-8">
        {mockCard.map((card, i) => (
          <Card
            id={card.id}
            name={card.name}
            price={card.price}
            image={card.image}
            description={card.description}
            key={i}
          />
        ))}
      </main>

      <footer className="self-end">
        <PaginationComponent
          numberOfPages={mockCard.length / 12}
          urlPages="#"
        />
      </footer>
    </div>
  )
}
