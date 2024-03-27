'use client'
import { ProductPropsWithQuantity } from '@/@types/productPropsWithQuantity'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { changeItemQuantity } from '@/lib/redux/reduxFeatures/cart/cartSlice'
import { useAppDispatch } from '@/lib/redux/hooks'

type SelectQuantityShopCartProps = {
  product: ProductPropsWithQuantity
}

export const SelectQuantityShopCart = ({
  product,
}: SelectQuantityShopCartProps) => {
  const dispatch = useAppDispatch()

  const handleChangeItemQuantity = (newQuantity: string) => {
    dispatch(changeItemQuantity({ ...product, quantity: Number(newQuantity) }))
  }

  return (
    <Select onValueChange={handleChangeItemQuantity}>
      <SelectTrigger className="w-[50px] border-display bg-background focus:ring-0 focus:ring-offset-0 focus:border-orangerlow text-display text-sm font-display gap-1 p-2 ">
        <SelectValue placeholder="1" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="1"
            className="text-display text-sm font-display text-center "
          >
            1
          </SelectItem>
          <SelectItem value="2" className="text-display text-sm font-display">
            2
          </SelectItem>
          <SelectItem value="3" className="text-display text-sm font-display">
            3
          </SelectItem>
          <SelectItem value="4" className="text-display font-display">
            4
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
