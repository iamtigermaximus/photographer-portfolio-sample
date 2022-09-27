import React from 'react'
import {
  Container,
  HomeRoute,
  PageRouteContainer,
  PageTitle,
  PageTitleContainer,
  Route,
} from './About.styles'
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
    </Container>
  )
}

export default About
