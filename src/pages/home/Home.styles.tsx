import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'
import BG1 from '../../assets/photog1.jpg'

export const Container = styled.div`
  background-image: url(${BG1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeroContainer = styled.div`
  // border: 2px solid white;
  width: 90%;
  height: 80%;
  color white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
`
export const HeroTexts = styled.h1`
  font-size: 25px;
  font-family: 'Helvetica', sans-serif;
  padding: 10px;
  letter-spacing: 0.3rem;
  text-shadow: 2px 2px 4px black;

  @media (min-width: ${bp.sm}) {
    font-size: 30px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 60px;
  }
  @media (min-width: ${bp.lg}) {
    font-size: 80px;
  }
`
export const HeroSubtexts = styled.h1`
  font-size: 15px;
  font-family: 'Helvetica', sans-serif;
  padding: 10px;
  letter-spacing: 0.3rem;
  text-shadow: 2px 2px 4px black;

  @media (min-width: ${bp.sm}) {
    font-size: 20px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const Button = styled.button`
  padding: 10px;
  color: ${colors.darkGray};
  background: transparent;
  border: 1px solid ${colors.darkGray};
  border-radius: 5px;
  letter-spacing: 0.3rem;
  text-shadow: 2px 2px 4px black;

  @media (min-width: ${bp.md}) {
    padding: 20px;
  }
`
