import {
  Container,
  HomeRoute,
  PageTitle,
  PageTitleContainer,
  Route,
} from './Portfolio.styles'
import Header from '../../components/header/Header'
import { PageRouteContainer } from '../contact/Contact.styles'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <PageTitleContainer>
        <PageTitle>PORTFOLIO</PageTitle>
      </PageTitleContainer>
      <PageRouteContainer>
        <HomeRoute onClick={() => navigate('/')}>HOME </HomeRoute>{' '}
        <span>/</span>
        <Route>PORTFOLIO</Route>
      </PageRouteContainer>
    </Container>
  )
}

export default Portfolio
