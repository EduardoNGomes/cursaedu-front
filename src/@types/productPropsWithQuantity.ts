import { ProductProps } from './productProps'

export interface ProductPropsWithQuantity extends Omit<ProductProps, 'price'> {
  price: number
  quantity: number
}
