import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './navber.css'
import { BsWallet } from 'react-icons/bs';
import { IoSearchOutline, IoShieldOutline } from 'react-icons/io5';
import { PiAirplaneTiltThin } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
const Navber = () => {
  return (
    <>
       <Navbar style={{backgroundColor:"#fff"}} variant="light" collapseOnSelect expand="lg" className="shadow-sm ">
      <Container>
        <Navbar.Brand href="#home"><img style={{width:"160.91px", height:"52.93px"}} src="./Logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link style={{fontWeight:"500",fontSize:"16px",color:"#006838"}} href="#features"><BsWallet size={21}color='green'/> Home</Nav.Link>
            <Nav.Link style={{fontWeight:"500",fontSize:"16px",color:"#006838"}} href="#features"><IoShieldOutline  size={21}color='green'/> Booking Requests</Nav.Link>
            <Nav.Link style={{fontWeight:"500",fontSize:"16px",color:"#006838"}} href="#features"><PiAirplaneTiltThin size={21}color='green'/> Quote Requests</Nav.Link>
            <Nav.Link style={{fontWeight:"500",fontSize:"16px",color:"#006838"}} href="#features"><CgProfile size={21}color='green'/> Setting</Nav.Link>
           
           
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets"><IoSearchOutline size={25}color='green'/></Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
             <Nav.Link style={{fontWeight:"500",fontSize:"16px",color:"#006838"}} href="#features"><CgProfile size={21}color='green'/> My Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navber
