import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  background: ${colors.matteBlack};
  width: 100%;
  height: 100%;
`

export const PageRouteContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.offWhite};
  justify-content: center;
  align-items: center;
`
