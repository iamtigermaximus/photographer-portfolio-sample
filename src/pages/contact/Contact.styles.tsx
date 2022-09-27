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
  width: 150px;

  @media (min-width: ${bp.md}) {
    padding: 20px;
  }
`
export const ContactsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${bp.md}) {
    width: 300px;
    height: 300px;
  }
`
export const Contacts = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 10px;
`
export const Icon = styled.div`
  font-size: 40px;
  color: white;
`
export const Address = styled.h1`
  font-size: 18px;
  color: white;
  margin: 10px;
`
