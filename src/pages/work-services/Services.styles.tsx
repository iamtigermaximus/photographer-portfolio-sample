import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  background: ${colors.matteBlack};
  width: 100vw;
  height: 100vh;
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
