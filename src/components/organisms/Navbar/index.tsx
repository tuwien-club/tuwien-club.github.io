import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit'

// import React from 'react'

interface Props {
  logoUrl?: string
  logoAlt?: string
}

const Navbar = ({
  logoUrl = 'https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png',
  logoAlt = ''
}: Props) => {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <img src={logoUrl} height="30" alt={logoAlt} loading="lazy" />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
