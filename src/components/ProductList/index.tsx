import Product from '../Product'
import { Container, List } from './styles'
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'rosa' | 'rosaclaro'
  games: Game[]
}

const ProductList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            category={game.category}
            description={game.description}
            image={game.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
