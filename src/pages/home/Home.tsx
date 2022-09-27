import {
  Container,
  HeroContainer,
  ContentContainer,
  HeroTexts,
  HeroSubtexts,
  ButtonContainer,
  Button,
} from './Home.styles'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <HeroContainer>
        <ContentContainer>
          <HeroTexts>Siegfred Gamboa</HeroTexts>
          <HeroSubtexts>Photographer, Helsinki</HeroSubtexts>
          <ButtonContainer>
            <Button onClick={() => navigate('/portfolio')}>
              VIEW ALL GALLERY
            </Button>
          </ButtonContainer>
        </ContentContainer>
      </HeroContainer>
    </Container>
  )
}

export default Home
