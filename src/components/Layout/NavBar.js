import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
//import styled from 'styled-components';
//const NavigationStyles = styled.div``;

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query navQuery {
      collections: allSanityGallery {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
      textpages: allSanityPost(filter: { show_in_nav: { eq: true } }) {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  const galleries = data.collections.nodes;
  const textpages = data.textpages.nodes;
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: `#343a40`, padding: `0` }}
    >
      <div className="container">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
          <Nav>
            <Nav.Item>
              <Link to="/" activeStyle={{ color: 'white' }}>
                Home
              </Link>
            </Nav.Item>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {galleries.map(el => (
                <Nav.Item key={el.id}>
                  <Link
                    to={`/gallery/${el.slug.current}`}
                    activeClassName="active"
                  >
                    {el.name}
                  </Link>
                </Nav.Item>
              ))}
              <Nav.Item>
                <a
                  href="https://prints.chrisbeaumont.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Print Shop
                </a>
              </Nav.Item>
              {textpages.map(el => (
                <Nav.Item key={el.id}>
                  <Link to={`/${el.slug.current}`} activeClassName="active">
                    {el.name}
                  </Link>
                </Nav.Item>
              ))}
              <Nav.Item>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <style scoped>{`
        .navbar {
          background-color: #343a40;
          color: #ffffff;
        }
        .navcontainer {
          background-color: #343a40;
        }
        .navbar a {
          color: #ffffff;
        }
        .navbar-brand {
          font-size: 1em;
        }
        .nav-item {
          padding: 4px 10px;
        }
        .nav-item a {
          color: #aaaaaa;
        }
        .nav-item a.active {
          color: red;
        }
        .nav-item a:hover {
          text-decoration: none;
          color: #eeeeee;
        }
      `}</style>
    </div>
  );
}
