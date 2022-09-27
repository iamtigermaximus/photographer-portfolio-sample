import {
  Container,
  HomeRoute,
  PageBody,
  PageContent,
  PageDescription,
  PageDescriptionContainer,
  PageTitle,
  PageTitleContainer,
  Route,
} from '../../components/common/Common.styles'
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
      <PageContent>
        <PageDescriptionContainer>
          <PageDescription>
            As a professional photographer, I offer my clients a wide set of
            services they can use for the benefit of their business or to make
            their project look more attractive. Even if you are not a
            businessman, you can still find what you are looking for at my
            website. Feel free to browse this page to learn more about
            photography services I provide.
          </PageDescription>
        </PageDescriptionContainer>
        <PageBody>hello</PageBody>
      </PageContent>
    </Container>
  )
}

export default Services
