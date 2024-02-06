//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import { useState } from 'react';
import classes from '../components/NavBar.module.css';

function NavBar() {
  // const [searchBar, setSearchBar] = useState(false);

  //   function searchBars(e){
  //       e.preventDefault();
  //       const result = players.filter(item=>item.name.toLowerCase().includes(searchBar.toLowerCase()));
  //       setSearchBar(result);
  //       console.log(result)
  //   }


  return (
    <Navbar expand="lg" className={classes.container}>
      <Container fluid>
        <Navbar.Brand href="#">Puppy Game</Navbar.Brand>
        <Navbar.Toggle aria-controls="homepage" />
        <Navbar.Collapse id="homepage">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            homepage
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allplayers">All Players</Nav.Link>
            <Nav.Link href="/newplayers">Add New Player</Nav.Link>
          </Nav>
          {/* <Form 
          onSubmit={searchBars}
          className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchBar}
              onChange={(e)=> setSearchBar(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button> 
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
