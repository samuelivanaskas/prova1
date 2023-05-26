import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
`

export const Titulo = styled.h3`
  height: 19px;
  width: 124px;
  left: 179px;
  top: 681px;
  border-radius: nullpx;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${cores.rosaclaro};
`

export const Descricao = styled.p`
  position: absolute;
  width: 304px;
  height: 88px;
  left: 179px;
  top: 708px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosaclaro};
`

export const Button = styled.button`
  height: 24px;
  width: 304px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-color: ${cores.rosaclaro};
  color: ${cores.rosa};
`
