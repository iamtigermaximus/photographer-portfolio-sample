import {
  Container,
  HomeRoute,
  PageRouteContainer,
  PageTitle,
  PageTitleContainer,
  Route,
} from './Contact.styles'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <PageTitleContainer>
        <PageTitle>CONTACT</PageTitle>
      </PageTitleContainer>
      <PageRouteContainer>
        <HomeRoute onClick={() => navigate('/')}>HOME </HomeRoute>{' '}
        <span>/</span>
        <Route>CONTACT</Route>
      </PageRouteContainer>
    </Container>
  )
}

export default Contact
