import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,  useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const NavbarComp= ()=> {

  return (
    <Navbar  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Event Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to = {"/"}>Home</Nav.Link>
         
            <Nav.Link as ={Link} to = {"/upcomingEvents"}>Upcoming Events</Nav.Link>
            
            <button onClick={''}>Logout</button>
          
        </Nav>
        </Navbar.Collapse>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Explore</Button>
          </Col>
        </Row>
      </Form>
    
      </Container>
    </Navbar>
  );
}

export default NavbarComp;