import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

// import React from 'react'

import './index.scss'

interface Props {
  logoUrl?: string
  logoAlt?: string
}

const Navbar = ({
  logoUrl = 'https://www.tuwien.club/images/logo.png',
  logoAlt = ''
}: Props) => {
  return (
    <>
      <MDBNavbar expand='lg' dark className="navbar-main">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={logoUrl} alt={logoAlt} loading="lazy" className="nav-logo" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="ml-3 font-weight-bold text-uppercase text-light"
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar id="navbarSupportedContent">
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 mr-auto'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#' className="ml-3 font-weight-bold text-uppercase text-light">Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#groups' className="ml-3 font-weight-bold text-uppercase text-light">Gruppen</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#faq' className="ml-3 font-weight-bold text-uppercase text-light">FAQ</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#rules' className="ml-3 font-weight-bold text-uppercase text-light">Regeln</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#contact' className="ml-3 font-weight-bold text-uppercase text-light">Kontakt</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#howto' className="ml-3 font-weight-bold text-uppercase text-light">How-To</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </>
  )
}

export default Navbar
