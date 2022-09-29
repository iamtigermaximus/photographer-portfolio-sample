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
import axios from 'axios'
import { useEffect, useState } from 'react'

const Services = () => {
  const navigate = useNavigate()
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios.get('https://backend-website-media.herokuapp.com/').then((resp) => {
      console.log(resp.data)
      setPhoto(resp.data.items)
    })
  }, [])
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
            {photo.map((photo: any) => (
              <ImageContainer key={photo._id}>
                <Image src={photo.img} />
              </ImageContainer>
            ))}
          </ImageWrapper>
        </PageBody>
      </PageContent>
    </Container>
  )
}

export default Services
