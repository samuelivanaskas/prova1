import Tag from '../Tag'
import { Botao, Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
}

export const Product = ({ title, category, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default Product
