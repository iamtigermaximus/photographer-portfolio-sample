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
  ImageContainer,
  Image,
  ImageWrapper,
} from '../../components/common/Common.styles'
import Header from '../../components/header/Header'
import { PageRouteContainer } from '../contact/Contact.styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Portfolio = () => {
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
        <PageTitle>PORTFOLIO</PageTitle>
      </PageTitleContainer>
      <PageRouteContainer>
        <HomeRoute onClick={() => navigate('/')}>HOME </HomeRoute>{' '}
        <span>/</span>
        <Route>PORTFOLIO</Route>
      </PageRouteContainer>
      <PageContent>
        <PageDescriptionContainer>
          <PageDescription>
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio
            dizaino pasaulyje jau nuo XVI a. pradžios. Lorem Ipsum tapo
            standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas
            atsitiktine tvarka išdėliojo raides atspaudų prese ir tokiu būdu
            sukūrė raidžių egzempliorių. Šis tekstas išliko beveik nepasikeitęs
            ne tik penkis amžius, bet ir įžengė i kopiuterinio grafinio dizaino
            laikus. Jis išpopuliarėjo XX a. šeštajame dešimtmetyje, kai buvo
            išleisti Letraset lapai su Lorem Ipsum ištraukomis, o vėliau
            -leidybinė sistema AldusPageMaker, kurioje buvo ir Lorem Ipsum
            versija.
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

export default Portfolio
