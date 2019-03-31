import React from 'react';
import { Navbar } from 'react-bulma-components/full';
import '../../App.css';
import logo from '../../assets/interface/logo.png';

const Landing = () => (
  <Navbar
    color="info"
    transparent
  >
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href="#">
        <img
          src={logo}
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="50"
          height="34"
        />
      </Navbar.Item>
      <Navbar.Item href="#">
        <p className="title">LeftOver</p>
      </Navbar.Item>
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item href="#">Second</Navbar.Item>
      </Navbar.Container>
      <Navbar.Container position="end">
        <Navbar.Item href="#">At the end</Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default Landing;
