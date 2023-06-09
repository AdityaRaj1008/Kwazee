import {
    Link,
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import { useState } from 'react'
  import { ethers } from "ethers"
  import MusicNFTMarketplaceAbi from '../contractsData/MusicNFTMarketplace.json'
  import MusicNFTMarketplaceAddress from '../contractsData/MusicNFTMarketplace-address.json'
  import { Spinner, Navbar, Nav, Button, Container } from 'react-bootstrap'
  import logo from './logo.jpg'
  import Home from './Home.js'
  import MyTokens from './MyTokens.js'
  import MyResales from './MyResales.js'
  import './App.css';


  
  <Container>
              <Navbar.Brand>
                <img src={logo} width="40" height="40" className="" alt="" />
                &nbsp; Music NFT player
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/my-tokens">My Tokens</Nav.Link>
                  <Nav.Link as={Link} to="/my-resales">My Resales</Nav.Link>
                </Nav>
                <Nav>
                  {account ? (
                    <Nav.Link
                      href={`https://etherscan.io/address/${account}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button nav-button btn-sm mx-4">
                      <Button variant="outline-light">
                        {account.slice(0, 5) + '...' + account.slice(38, 42)}
                      </Button>

                    </Nav.Link>
                  ) : (
                    <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>