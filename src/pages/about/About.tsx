import React from 'react'
import {
  Container,
  HomeRoute,
  PageBody,
  PageContent,
  PageDescription,
  PageDescriptionContainer,
  PageRouteContainer,
  PageTitle,
  PageTitleContainer,
  Route,
} from '../../components/common/Common.styles'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Header />
      <PageTitleContainer>
        <PageTitle>ABOUT</PageTitle>
      </PageTitleContainer>
      <PageRouteContainer>
        <HomeRoute onClick={() => navigate('/')}>HOME </HomeRoute>{' '}
        <span>/</span>
        <Route>ABOUT</Route>
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
        <PageBody>hello</PageBody>
      </PageContent>
    </Container>
  )
}

export default About
