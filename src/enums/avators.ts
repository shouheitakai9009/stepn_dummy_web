export interface IAvator {
  id: number
  name: string
  image_url: string
}

export const avators: IAvator[] = [
  { id: 0, name: "Cat", image_url: "/images/avator/cat.jpeg" },
  { id: 1, name: "Panda", image_url: "/images/avator/lesser.jpg" },
  { id: 2, name: "Small Dog", image_url: "/images/avator/pome.jpg" },
  { id: 3, name: "Large Dog", image_url: "/images/avator/shiba.jpg" },
]

export const getAvator = (id: number) => avators.find(a => a.id === id)