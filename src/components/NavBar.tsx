import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import logo from '../assets/logo.png';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon3.svg';
import navIcon3 from '../assets/github.png';
import React from 'react';

export const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={HashLink}
                smooth
                to="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#experience"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/chiragadve/">
                  <img src={navIcon1} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/chirag__750/">
                  <img src={navIcon2} alt="" />
                </a>
                <a target="_blank" href="https://github.com/Chiragadve">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink smooth to="#connect">
                <button className="vvd">
                  <span>Contact Me</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
