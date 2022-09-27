import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  background: ${colors.matteBlack};
  width: 100%;
  height: 100vh;
`

export const PageRouteContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.offWhite};
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const Input = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 100%;
  background: ${colors.matteBlack};
  border: 2px solid white;
  color: white;

  @media (min-width: ${bp.lg}) {
    width: 600px;
  }
`

export const TextArea = styled.textarea`
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 400px;
  background: ${colors.matteBlack};
  color: white;
  border: 2px solid white;

  @media (min-width: ${bp.lg}) {
    width: 600px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const Button = styled.button`
  padding: 10px 20px;
  color: ${colors.darkGray};
  background: transparent;
  border: 1px solid ${colors.darkGray};
  border-radius: 5px;
  letter-spacing: 0.2rem;

  @media (min-width: ${bp.md}) {
    padding: 20px;
  }
`
