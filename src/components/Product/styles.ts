import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Botao = styled.button`
  background-color: ${cores.rosaclaro};
  border: none;
  width: 100%;
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  cursor: pointer;
  padding: 4px 0;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${cores.rosaclaro};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  color: ${cores.rosaclaro};
`
