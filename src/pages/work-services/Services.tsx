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
  ImageWrapper,
  ImageContainer,
  Image,
} from '../../components/common/Common.styles'
import Header from '../../components/header/Header'
import { PageRouteContainer } from '../contact/Contact.styles'
import { useNavigate } from 'react-router-dom'
import BG1 from '../../assets/photog1.jpg'
import BG2 from '../../assets/photog2.jpg'
import BG3 from '../../assets/photog3.jpg'
import BG4 from '../../assets/photog4.jpg'
import PG1 from '../../assets/pg1.jpg'
import PG2 from '../../assets/pg2.jpg'
import PG3 from '../../assets/pg3.jpg'
import PG4 from '../../assets/pg4.jpg'
import PG5 from '../../assets/pg5.jpg'
import PG6 from '../../assets/pg6.jpg'

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
        <PageBody>
          <ImageWrapper>
            <ImageContainer>
              <Image src={BG1} />
            </ImageContainer>
            <ImageContainer>
              <Image src={BG2} />
            </ImageContainer>
            <ImageContainer>
              <Image src={BG3} />
            </ImageContainer>
            <ImageContainer>
              <Image src={BG4} />
            </ImageContainer>
            <ImageContainer>
              <Image src={PG1} />
            </ImageContainer>
            <ImageContainer>
              <Image src={PG2} />
            </ImageContainer>
            <ImageContainer>
              <Image src={PG3} />
            </ImageContainer>
            <ImageContainer>
              <Image src={PG4} />
            </ImageContainer>
            <ImageContainer>
              <Image src={PG5} />
            </ImageContainer>
            <ImageContainer>
              <Image src={PG6} />
            </ImageContainer>
          </ImageWrapper>
        </PageBody>
      </PageContent>
    </Container>
  )
}

export default Services
