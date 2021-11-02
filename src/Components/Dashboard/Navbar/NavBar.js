import React from 'react'
import { Container,Navbar,Nav,DropdownButton,Dropdown } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import './NavBar.css'
// import icon from '../../../assests/iconWhitebg.jpeg'
// import icon from '../../../assests/svgIcon.svg'
import icon from '../../../assests/icon4.png'
// import icon from '../../../assests/icon3.png'
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@mui/icons-material/Facebook';



const NavBar = () => {
  const handlefb = () => {
    window.open("https://www.facebook.com/Purneshwari-projects-pvt-ltd-105686978542374")
}
    return (
        <div >
            <Navbar className="Nav-con" bg="light" expand="lg" style={{background:'#ffdb60'}}>
  <Container>
    <Navbar.Brand href="#home"><img className="icon" src={icon} alt=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link className="service-tab"  onClick={handlefb}><FacebookIcon style={{fontSize:'36px'}}/>Facebook</Nav.Link>
        <Nav.Link className="home-tab"><CallIcon style={{fontSize:'36px'}}/>7000502696</Nav.Link>
        
        {/* <NavDropdown className="project-tab" title="Project" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar
