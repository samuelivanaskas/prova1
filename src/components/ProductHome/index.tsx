import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo, Botao } from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

export const ProductHome = ({
  title,
  category,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Descricao>{description}</Descricao>
    <Botao>Saiba mais</Botao>
  </Card>
)
