import { Search, ShoppingBag } from 'lucide-react'
import { Input } from '../ui/input'

export const Header = async () => {
  return (
    <header className="bg-white px-40 py-4 flex justify-between items-center">
      <h1 className="font-title text-title text-[40px] leading-[60px]">
        capputeeno
      </h1>
      <div className=" flex gap-6">
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
            text-sm
            "
            placeholder="Procurando por algo específico?"
            type="text"
          />
          <Search className="text-title" />
        </div>

        <div className=" flex items-center relative">
          <ShoppingBag className="text-title " />
          <span className="text-[10px] absolute bottom-[2px] -right-1 text-white bg-red-600 w-4 h-4 rounded-full flex items-center justify-center">
            1
          </span>
        </div>
      </div>
    </header>
  )
}
