import Apresentation from '../../components/Apresentation'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import PizzaImage from '../../assets/Images/image_3.png'
import Header from '../../components/Header'

const pizza: Game[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaImage
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaImage
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaImage
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaImage
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaImage
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaImage
  }
]

const Perfil = () => (
  <>
    <Header />
    <Apresentation />
    <ProductList games={pizza} background="rosaclaro" title={''} />
  </>
)

export default Perfil
