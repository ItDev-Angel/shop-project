export type Product = {
  id:number
  name:string
  description:string
  type: string
  capacity: number
  price:number
  image:string
}

const productsArray:Product[] = [
  {
    id:1,
    name:"iPhone X",
    description: "description iphone",
    type: "phone",
    capacity: 64,
    price: 1000,
    image: "/images/iphone-black.jpeg",
  },
  {
    id:2,
    name:"iPhone xs",
    description: "description iphone xs",
    type: "phone",
    capacity: 128,
    price: 1500,
    image: "/images/iphone-white.jpeg",
  },
  {
    id:3,
    name:"iPhone m",
    description: "description iphone m",
    type: "phone",
    capacity: 256,
    price: 2500,
    image: "/images/iphone-pink.jpeg",
  }
]

export default productsArray

export const getProductsObject = (array:Product[]) => {
  return array.reduce((object, product) => ({
    ...object,
    [product.id]:product
  }),{})
}

