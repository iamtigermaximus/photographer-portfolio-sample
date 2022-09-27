import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  // background: #13274f;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
`
export const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavbarLinks = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: row;
  }
`
export const BrandLinkItem = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.offWhite};
  font-size: 20px;
  letter-spacing: 0.1rem;
  display: none;

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }
`

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  padding: 5px;
  color: ${colors.offWhite};
  font-size: 30px;

  @media (min-width: ${bp.lg}) {
    // display: none;
  }
`
export const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px ;
 > a {
  text-decoration: none;
 }
`
export const LinkItem = styled.h1`
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px 20px;
  font-size: 20px;
  letter-spacing: 0.1rem;
  // display: none;
`
export const BrandContainer = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  white-space: nowrap;

  > a {
    text-decoration: none;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  padding: 0 10px;
`
export const MobileMenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 4vh;
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  // background: #13274f;
  background: black;
  //opacity: 0.6;
  transform: translateX(0%);
  transition: transform 0.3s ease-out;
  z-index: 1;
  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }

  @media (min-width: ${bp.lg}) {
    width: 20%;
  }
`
export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
