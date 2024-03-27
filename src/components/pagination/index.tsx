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
  urlPages: string
}

export const PaginationComponent = ({
  numberOfPages,
  urlPages,
}: PaginationComponentProps) => {
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1)

  return (
    <Pagination>
      <PaginationContent className="text-display text-sm font-display">
        {pages.map((page) => {
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={urlPages}
                className="bg-gray-300 p-1 h-8 w-8 border-2 border-transparent hover:border-orangerlow hover:text-orangerlow"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationPrevious
            href={urlPages}
            className="bg-gray-300 p-1 h-8 w-8 border-2 border-transparent hover:border-orangerlow ml-1"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={urlPages}
            className="bg-gray-300 p-1 h-8 w-8 border-2 border-transparent hover:border-orangerlow"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
