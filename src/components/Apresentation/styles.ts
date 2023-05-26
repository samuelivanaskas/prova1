import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  top: 160px;
  left: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Title = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  width: 670px;
  height: 32px;
  left: 120px;
  top: 374px;
  color: ${cores.branco};
`

export const Legend = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  width: 120px;
  height: 32px;
  left: 120px;
  top: 180px;
  color: ${cores.branco};
`
