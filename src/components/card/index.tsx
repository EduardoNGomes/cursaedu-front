import Image from 'next/image'

type CardProps = {
  name: string
  price: string
  image: string
}

export const Card = ({ name, price }: CardProps) => {
  return (
    <div className="w-64 flex flex-col gap-2 bg-white rounded-lg">
      <Image
        src="/caneca-01.jpg"
        alt="caneca"
        width={1000}
        height={1000}
        className="w-full rounded-t-lg h-[300px]"
      />
      <div className="px-3 flex flex-col gap-2 pb-3">
        <h4 className="text-base font-display font-light leading-6">{name}</h4>
        <div className="h-[1px] w-full bg-gray-200"></div>
        <span className="text-sm font-display font-semibold leading-6">
          {price}
        </span>
      </div>
    </div>
  )
}