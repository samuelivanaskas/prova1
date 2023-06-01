class Game {
  title: string
  category: string
  description: string
  image: string
  id: number

  constructor(
    title: string,
    category: string,
    description: string,
    image: string,
    id: number
  ) {
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Game
