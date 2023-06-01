import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corHeader};
  width: 100%;
  height: 320px;
  border-radius: 16px;
`

export const Text = styled.p`
  align-itens: center;
  padding: 32px;
  margin-top: 32px;
  display: block;
  color: ${cores.rosa};
`

export const Ilogo = styled.div`
  align-itens: center
  margin: 0 32px;
  background-color: ${cores.rosa};
`
