import {
  Container,
  HomeRoute,
  PageTitle,
  PageTitleContainer,
  Route,
} from './Services.styles'
import Header from '../../components/header/Header'
import { PageRouteContainer } from '../contact/Contact.styles'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <PageTitleContainer>
        <PageTitle>SERVICES</PageTitle>
      </PageTitleContainer>
      <PageRouteContainer>
        <HomeRoute onClick={() => navigate('/')}>HOME </HomeRoute>{' '}
        <span>/</span>
        <Route>SERVICES</Route>
      </PageRouteContainer>
    </Container>
  )
}

export default Services
