import logo from './logo.svg'
import { Router, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
//do not use Router as GitHub Page does not support it. Use HashRouter instead
import Container from 'react-bootstrap/Container'
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

export default class App extends Component {
  state = {
    title: 'YUsheng Ding',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' }
    ],
    home: {
      title: 'Currently Under Construction...',
      subTitle: 'Projects That Will Make A Difference',
      text: 'Checkout my projects below'
    },
    about: {
      title: 'About Me'
    },
    contact: {
      title: 'Let\'s Talk'
    }
  }
  render() {
    const { home, about, contact } = this.state

    return (
      <HashRouter>
        <Container className='p-0' fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Yusheng Ding</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={home.title} subTitle={home.subTitle} text={home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={contact.title} />} />
          {/*
            React Router asking the react to render the component on the desired page, so that there is not redirection required.
          */}

          <Footer />
        </Container>
      </HashRouter>
    )
  }
}