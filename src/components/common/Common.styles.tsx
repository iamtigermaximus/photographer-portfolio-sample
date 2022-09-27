import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  background: ${colors.matteBlack};
  width: 100%;
  height: 100%;
`
export const PageTitleContainer = styled.div`
  padding-top: 15vh;
`

export const PageTitle = styled.h1`
  color: ${colors.offWhite};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3rem;
`
export const Route = styled.h1`
  font-size: 13px;
  padding: 10px;
`
export const HomeRoute = styled.h1`
  font-size: 13px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const PageRouteContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.offWhite};
  justify-content: center;
  align-items: center;
`
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
    padding: 30px 60px;
  }
`
export const PageDescriptionContainer = styled.div`
  padding: 20px;

  @media (min-width: ${bp.md}) {
    width: 400px;
  }
`
export const PageDescription = styled.p`
  font-size: 16px;
  color: ${colors.offWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Questrial', sans-serif;
  line-height: 1.5;
  font-weight: 400;
`
export const PageBody = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  color: ${colors.offWhite};
  // border: 2px solid white;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (min-width: ${bp.lg}) {
    //height: 800px;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  padding: 10px;
  height: 500px;
  background: ${colors.offWhite};

  @media (min-width: ${bp.md}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${bp.lg}) {
    width: 300px;
    height: 300px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
