
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import '../App.css';

function Header() {

    const topPadd = {
        paddingTop : '25px'
    }
    const navLinks = {
      fontSize : '1.2em',
      color : '#1f2235'
    }
   

   
  return (
    <div>
      <Navbar collapseOnSelect expand="md" >
      <Container>
        <Navbar.Brand href="#home" className='logo'>Yasin<b>.</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mx-auto" style={topPadd}>
            <Nav.Link href="#features" style={navLinks} className="LinkHome">Home</Nav.Link>
            <Nav.Link href="#about" style={navLinks} className="LinkHome">Services</Nav.Link>
            <Nav.Link href="#about" style={navLinks} className="LinkHome">About</Nav.Link>
            <Nav.Link href="#skills" style={navLinks} className="LinkHome">Skills</Nav.Link>
            <Nav.Link href="#blogs" style={navLinks} className="LinkHome">Blogs</Nav.Link>
            
          </Nav>
          <Nav style={topPadd}>
            <Nav.Link href="#deets" style={navLinks} className="socialIcons"><ion-icon  name="logo-facebook" ></ion-icon></Nav.Link>
            <Nav.Link href="#deets" style={navLinks} className="socialIcons"><ion-icon  name="logo-instagram" ></ion-icon></Nav.Link>
            <Nav.Link href="#deets" style={navLinks} className="socialIcons"><ion-icon  name="logo-twitter" ></ion-icon></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
