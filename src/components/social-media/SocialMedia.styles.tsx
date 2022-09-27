import styled from 'styled-components'
//import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SocialMediaLists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const SocialMediaItem = styled.div`
  font-size: 20px;
  padding: 10px;
  margin: 10px;

  > a {
    text-decoration: none;
    color: ${colors.offWhite};
  }
`
