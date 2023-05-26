import ProductListHome from '../../components/ProductListHome'
import GameHome from '../../models/GameHome'
import ImagensJapao from '../../assets/Images/imagem.png'
import ImagensMaca from '../../assets/Images/image_2.png'
import HeaderHome from '../../components/HeaderHome'

const comidas: GameHome[] = [
  {
    id: 1,
    category: 'Comida Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Comida Japonesa',
    infos: ['Destaque da semana', 'Japonesa'],
    image: ImagensJapao
  },
  {
    id: 2,
    category: 'Comida Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Comida Italiana',
    infos: ['Italiana'],
    image: ImagensMaca
  },
  {
    id: 3,
    category: 'Comida Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Comida Italiana',
    infos: ['Italiana'],
    image: ImagensMaca
  },
  {
    id: 4,
    category: 'Comida Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Comida Italiana',
    infos: ['Italiana'],
    image: ImagensMaca
  },
  {
    id: 5,
    category: 'Comida Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Comida Italiana',
    infos: ['Italiana'],
    image: ImagensMaca
  },
  {
    id: 6,
    category: 'Comida Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Comida Italiana',
    infos: ['Italiana'],
    image: ImagensMaca
  }
]

const Home = () => (
  <>
    <HeaderHome />
    <ProductListHome title="" games={comidas} background="branco" />
  </>
)

export default Home
