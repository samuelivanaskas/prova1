import { Button, Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  id: string
}

const Product = ({ title, description, image, id }: Props) => (
  <Card>
    <img src={image} />
    <div>{id}</div>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default Product
