import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
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

export const ButtonLink = styled(Link)`
  height: 24px;
  width: 304px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background-color: ${cores.rosaclaro};
  color: ${cores.rosa};
`
