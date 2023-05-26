import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  height: 1290px;
  width: 1024px;
  left: 171px;
  top: 440px;
  border-radius: 0px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Botao = styled.button`
  height: 16px;
  width: 70px;
  left: 6px;
  top: 4px;
  border-radius: nullpx;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  background-color: ${cores.rosa};
  color: ${cores.rosaclaro};
`

export const Titulo = styled.h3`
  height: 21px;
  width: 92px;
  left: 178px;
  top: 665px;
  border-radius: nullpx;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: ${cores.rosa};
`

export const Descricao = styled.p`
  height: 88px;
  width: 456px;
  left: 179px;
  top: 702px;
  border-radius: nullpx;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: ${cores.rosa};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
