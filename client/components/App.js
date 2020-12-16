import All from './All'
import Home from './Home'
// import Hermatite from '../Hermatite';
// import Glass from '../Glass';
// import CzechTile from '../CzechTile';
import Cart from './Cart'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          bg="light"
          sticky="top"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/all">All Beads</Nav.Link>
              <NavDropdown title="Bead Styles" id="basic-nav-dropdown">
                <NavDropdown.Item href="/hermatite">Hermatite</NavDropdown.Item>
                <NavDropdown.Item href="/cztile">Czech Tile</NavDropdown.Item>
                <NavDropdown.Item href="/glass">Glass</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link id="cartlink" href="/cart">
            Cart
          </Nav.Link>
        </Navbar>
        <Switch>
          <Route path="/all">
            <All />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/hermatite">
            <Hermatite />
          </Route>
          <Route path="/cztile">
            <CzechTile />
          </Route>
          <Route path="/glass">
            <Glass />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
