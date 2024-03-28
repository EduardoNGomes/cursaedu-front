'use client'

import { Search, ShoppingBag } from 'lucide-react'
import { Input } from '../ui/input'
import Link from 'next/link'

import { selectorTotalProductsQuantity } from '@/lib/redux/reduxFeatures/cart/cartSelector'
import { useAppSelector } from '@/lib/redux/hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = searchParams.get('page') ?? 1

  const currentName = searchParams.get('name')

  const firstCallHome =
    `${pathname}?${searchParams}` === '/?' ||
    `${pathname}?${searchParams}` === '/category/tshirt?' ||
    `${pathname}?${searchParams}` === '/category/mug?'

  const totalQuantityItem = useAppSelector((state) =>
    selectorTotalProductsQuantity(state),
  )

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (search !== '' || firstCallHome !== true) {
        if (currentName !== '') {
          router.push(`?name=${search}&page=${1}`)
        } else {
          router.push(`?name=${search}&page=${currentPage}`)
        }
      }
    }, 600)
    return () => clearTimeout(timerId)
  }, [search, router, firstCallHome, currentPage, currentName])

  return (
    <header className="bg-white px-40 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1140px] w-full mx-auto">
        <Link href="/">
          <h1 className="font-title text-title text-[40px] leading-[60px]">
            capputeeno
          </h1>
        </Link>
        <div className="flex gap-1 sm:gap-6">
          <div
            className="flex items-center justify-center px-2
              bg-background
              rounded-lg
              ring-orangerlow
              focus-within:ring-1 focus-within:ring-offset-orangerlow
              w-80
              "
          >
            <Input
              className="
                  bg-transparent
                  border-0 focus:border-none outline-none focus:outline-none
                  ring-offset-0
                  focus-visible:ring-0 focus-visible:ring-offset-0
                  font-display
                  text-sm"
              placeholder="Procurando por algo específico?"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="text-title" />
          </div>

          <Link
            className=" flex items-center relative"
            href="/payment
          "
          >
            <ShoppingBag className="text-title " />
            <span className="text-[10px] absolute bottom-[2px] -right-1 text-white bg-red-600 w-4 h-4 rounded-full flex items-center justify-center">
              {totalQuantityItem}
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
