import { HeaderBar } from './styles'
import Logo from '../../assets/Images/logo.svg'
import { LinkItemA, LinkItemB, LogoHeader } from './styles'

const Header = () => (
  <HeaderBar>
    <LogoHeader>
      <img src={Logo} alt="EFOOD" />
    </LogoHeader>
    <ul>
      <LinkItemA>
        <a href="#">Restaurantes</a>
      </LinkItemA>
      <LinkItemB>
        <a href="#">0 produto(s) no carrinho</a>
      </LinkItemB>
    </ul>
  </HeaderBar>
)

export default Header
