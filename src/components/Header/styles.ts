import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corHeader};
  width: 1024px;
  height: 186px;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const LinkItemA = styled.li`
  align-items: center;
  justify-content: space-between;
`
export const LinkItemB = styled.li`
  align-items: center;
  justify-content: space-between;
`

export const LogoHeader = styled.div`
  align-items: center;
  justify-content: space-between;
`
