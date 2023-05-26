import Product from '../Product'
import { Container, List } from './styles'
import Game from '../../models/Game'

export type Props = {
  background: 'branco'
  games: Game[]
}

const ProductList = ({ background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
            id={'1'}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
