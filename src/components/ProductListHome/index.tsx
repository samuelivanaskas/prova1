import GameHome from '../../models/GameHome'
import { ProductHome } from '../ProductHome'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'branco'
  games: GameHome[]
}

const ProductListHome = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <ProductHome
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListHome
