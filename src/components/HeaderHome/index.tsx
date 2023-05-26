import { Text, HeaderBar, Ilogo } from './styles'

import logo from '../../assets/Images/logo.svg'

const HeaderHome = () => (
  <HeaderBar>
    <Ilogo>
      <img src={logo} alt="EPLAY" />
    </Ilogo>
    <nav>
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </nav>
  </HeaderBar>
)

export default HeaderHome
