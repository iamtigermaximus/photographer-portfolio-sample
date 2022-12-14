import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  NavbarContainer,
  LinkItemContainer,
  MenuContainer,
  LinkItem,
  BurgerMenu,
  MobileMenuContainer,
  MobileNavbarLinks,
  CloseIcon,
} from './Navbar.styles'

const Navbar = () => {
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <MenuContainer>
        <BurgerMenu onClick={categoryMenu}>
          {click ? <FaBars /> : <FaTimes />}
          <MobileMenuContainer
            className={click ? 'category active' : 'category'}
            onClick={categoryMenu}
          >
            <MobileNavbarLinks>
              <CloseIcon onClick={categoryMenu}>
                <FaTimes />
              </CloseIcon>
              <LinkItemContainer>
                <Link to='/'>
                  <LinkItem>HOME</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/portfolio'>
                  <LinkItem>PORTFOLIO</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/services'>
                  <LinkItem>SERVICES</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/about'>
                  <LinkItem>ABOUT</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/contact'>
                  <LinkItem>CONTACT</LinkItem>
                </Link>
              </LinkItemContainer>
            </MobileNavbarLinks>
          </MobileMenuContainer>
        </BurgerMenu>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
