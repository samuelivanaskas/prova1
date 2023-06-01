import { HeaderBar } from './styles'
import Logo from '../../assets/Images/logo.svg'
import { LinkItemA, LinkItemB, LogoHeader } from './styles'

const Header = () => (
  <HeaderBar>
    <LogoHeader>
      <img src={Logo} alt="EFOOD" />
    </LogoHeader>
    <ul>
      <li>
        <LinkItemA>Restaurantes</LinkItemA>
      </li>
      <li>
        <LinkItemB>0 produto(s) no carrinho</LinkItemB>
      </li>
    </ul>
  </HeaderBar>
)

export default Header
