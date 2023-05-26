import LogoFacebook from '../../assets/Images/Vector.png'
import LogoInsta from '../../assets/Images/Vector_2.png'
import LogoTwitter from '../../assets/Images/Vector_3.png'
import Logo from '../../assets/Images/logo.svg'
import { Container, Ilogo, RedesSociais, TextFooter } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Ilogo>
        <img src={Logo} alt="Logo" />
      </Ilogo>
      <RedesSociais>
        <img src={LogoFacebook} alt="Logo Facebook" />
        <img src={LogoInsta} alt="Logo Insta" />
        <img src={LogoTwitter} alt="Logo Twitter" />
      </RedesSociais>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </div>
  </Container>
)

export default Footer
