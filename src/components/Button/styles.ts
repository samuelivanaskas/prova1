import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-align: center;
  background-color: ${cores.rosa};
  color: ${cores.rosaclaro};
`

export const ButtonLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  background-color: ${cores.rosaclaro};
  color: ${cores.rosa};
`
