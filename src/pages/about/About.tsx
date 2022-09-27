import React from 'react'
import { Container, PageTitle, PageTitleContainer } from './About.styles'
import Header from '../../components/header/Header'

const About = () => {
  return (
    <Container>
      <Header />
      <PageTitleContainer>
        <PageTitle>ABOUT</PageTitle>
      </PageTitleContainer>
    </Container>
  )
}

export default About
