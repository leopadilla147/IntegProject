import { Container } from 'react-bootstrap';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  return (
    <Container fluid>
        <footer className='footer'>
      <div className='leftContent'>
        <p className='contactInfo'>
          <span className='contactHeader'>Contact Information</span><br />
          Camarines Norte State College, Information Technology Services Office<br />
          F. Pimentel Avenue, Daet, 4600 Camarines Norte, Philippines<br />
          Telephone No: (054) 727-2672 or 440-1199<br />
          PICRO Mobile No: 09688983078 | 09171439973<br />
          Mobile No: 09190042143<br />
          Email: <u>president@cnscedu.ph</u>
        </p>
      </div>
      <div className='rightContent'>
        <div className='helpContainer'>
          <span className='help'>Help</span>
          <div className='iconContainer'>
            <a href="https://twitter.com" className='iconLink'><FaTwitter size={24} /></a>
            <a href="https://facebook.com" className='iconLink'><FaFacebook size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
    </Container>
  )
}

export default Footer
