import { Container, PageTitle, PageTitleContainer } from './Portfolio.styles'
import Header from '../../components/header/Header'

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <PageTitleContainer>
        <PageTitle>PORTFOLIO</PageTitle>
      </PageTitleContainer>
    </Container>
  )
}

export default Portfolio
