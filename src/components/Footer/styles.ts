import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaclaro};
`

export const Ilogo = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 12px;
  color: ${cores.rosa};
`

export const RedesSociais = styled.div`
  display: flex;
  margin-right; 8px;
  margin-top: 12px;
  display: grid;
  grid-template-columns: 0.05fr 0.05fr 0.05fr;
`
export const TextFooter = styled.h4`
  margin-top: 12px;
  color: ${cores.rosa};
`
