import { Image, Legend, Title } from './styles'
import bannerImg from '../../assets/Images/imagem_fundo.png'

const Apresentacao = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Legend>Italiana</Legend>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default Apresentacao
