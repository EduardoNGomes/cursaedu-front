import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  Pagination,
} from '../ui/pagination'

export const PaginationComponent = () => {
  return (
    <Pagination>
      <PaginationContent className="text-display text-sm font-display">
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-gray-300 p-1 h-8 w-8 border-2 border-transparent hover:border-orangerlow"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-gray-300 p-1 h-8 w-8 border-2 border-transparent hover:border-orangerlow ml-1"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-gray-300 p-1 h-8 w-8 border-2 border-transparent hover:border-orangerlow"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
