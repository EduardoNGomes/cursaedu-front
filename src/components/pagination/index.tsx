'use client'

import { useSearchParams } from 'next/navigation'
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  Pagination,
} from '../ui/pagination'

type PaginationComponentProps = {
  numberOfPages: number
  currentUrl: string
}

export const PaginationComponent = ({
  numberOfPages,
  currentUrl,
}: PaginationComponentProps) => {
  const searchParams = useSearchParams()

  const currentPage = searchParams.get('page') ?? 1

  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1)

  if (Number(currentPage) === 2 && pages.length === 1) {
    currentUrl.split('page=')[0].concat(`page=${1}`)
  }

  const alterPage = (newPage: string) => {
    if (currentUrl === '/?undefined') {
      return `/?name=&page=${newPage}`
    }
    return currentUrl.split('page=')[0].concat(`page=${newPage}`)
  }

  return (
    <Pagination>
      <PaginationContent className="text-display text-sm font-display">
        {pages.map((page) => {
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={alterPage(String(page))}
                className={`bg-gray-300 p-1 h-8 w-8 border-2 border-transparent 
                ${
                  Number(currentPage) === page
                    ? 'border-orangerlow bg-white text-display'
                    : 'hover:border-orangerlow hover:text-orangerlow'
                }
                `}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem
          className={`${pages[0] === Number(currentPage) ? ' cursor-not-allowed  ' : ''}`}
        >
          <PaginationPrevious
            href={alterPage(String(Number(currentPage) - 1))}
            className={`bg-gray-300 p-1 h-8 w-8 border-2 ml-1 
              ${pages[0] === Number(currentPage) ? ' pointer-events-none cursor-not-allowed hover:bg-gray-300' : 'border-transparent hover:border-orangerlow'}
            `}
          />
        </PaginationItem>
        <PaginationItem
          className={`${pages.length <= Number(currentPage) ? ' cursor-not-allowed  ' : ''}`}
        >
          <PaginationNext
            href={alterPage(String(Number(currentPage) + 1))}
            className={`bg-gray-300 p-1 h-8 w-8 border-2 ml-1 
            ${pages.length <= Number(currentPage) ? 'pointer-events-none cursor-not-allowed hover:bg-gray-300 ' : 'border-transparent hover:border-orangerlow'}
          `}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
