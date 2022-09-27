import {
  Container,
  HeroContainer,
  ContentContainer,
  HeroTexts,
  HeroSubtexts,
  ButtonContainer,
  Button,
} from './Home.styles'

const Home = () => {
  return (
    <Container>
      <HeroContainer>
        <ContentContainer>
          <HeroTexts>Siegfred Gamboa</HeroTexts>
          <HeroSubtexts>Photographer, Helsinki</HeroSubtexts>
          <ButtonContainer>
            <Button>VIEW ALL GALLERY</Button>
          </ButtonContainer>
        </ContentContainer>
      </HeroContainer>
    </Container>
  )
}

export default Home
