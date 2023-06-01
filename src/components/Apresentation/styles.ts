import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 240px;
  top: 160px;
  left: 0;
  position: relative;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Title = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 24px;
  font-weight: bold;
  max-width: 676px;
  color: background: rgba(255, 255, 255, 1);
`

export const Legend = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 24px;
  font-weight: 100;
  position: absolute;
  top: 32px;
  line-height: 38px;
  width: 120px;
  height: 32px
  color: ${cores.branco};
`
