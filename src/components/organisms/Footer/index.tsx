import {MDBFooter} from 'mdb-react-ui-kit'

// import React from 'react'

interface Props {
  copyrightText: string
  copyrightUrl: string
}

const Footer = ({copyrightText, copyrightUrl}: Props) => {
  return (
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className="text-dark" href={copyrightUrl}>
          {copyrightText}
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
