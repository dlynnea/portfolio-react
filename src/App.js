import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Danielle Matton',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: "Danielle",
        subtitle: "Web Developer. Programmer. Designer.",
        text: "Take a look at a few of my most recent projects... "
      },
      about: {
        title: "A little about me"
      },
      contact: {
        title: "Let's connect"
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand className="nav-name"><i class="fab fa-connectdevelop"></i></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            <Route path="/" exact render={() => <Home title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />}/>
            <Route path="/about" exact render={() => <About title={this.state.about.title} />} />
            <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
