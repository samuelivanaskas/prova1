import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'branco' ? cores.branco : cores.branco};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
`
