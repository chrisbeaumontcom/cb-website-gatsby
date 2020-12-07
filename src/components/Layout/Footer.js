import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import banner02 from '../../assets/img/layout/banner02lemons.jpg';
import insta from '../../assets/img/soc-insta-30.png';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import GalleryContext from '../GalleryContext';

const FooterStyles = styled.footer`
  h2 {
    color: white;
  }
  .container-fluid {
    background-color: #222222;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .social {
    padding: 5px 12px;
  }
  img.imgfooter {
    max-width: 300px;
    width: 100%;
    height: auto;
    margin: 0 auto 15px auto;
  }
  .footbox {
    padding-left: 14px;
    padding-right: 14px;
    color: #fff;
  }
  .footboximg {
    padding-top: 0;
    padding-left: 14px;
    padding-right: 14px;
    color: #fff;
  }
  .footbox a {
    color: #fff;
    text-shadow: none;
    background-image: none;
  }
  .footbox h2 {
    text-transform: uppercase;
    font-size: 11px;
    border-bottom: 1px solid #fff;
    margin-top: 0;
    font-weight: normal;
  }
  .footbox ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .footbox ul li {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: normal;
  }
  .footbox ul.list-inline li {
    padding: 0;
    margin: 0;
  }
  .footbox p {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: normal;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      textpages: allSanityPost(filter: { show_in_foot: { eq: true } }) {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
      site {
        siteMetadata {
          version
        }
      }
    }
  `);
  const [gaOptin] = useContext(GalleryContext);
  const ga = gaOptin ? 'on' : 'off';
  //const textpages = data.textpages.nodes;

  return (
    <FooterStyles>
      <Container fluid>
        <Container>
          <Row>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-center footboximg">
              <Link to="/">
                <img
                  src={banner02}
                  alt="Still life with Lemons"
                  className="imgfooter"
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 footbox">
              <h2>Christopher Beaumont</h2>
              <p>
                &copy;{new Date().getFullYear()} Christopher Beaumont
                <br />
                All rights reserved
                <br />
                Painted in Melbourne
                <br />
                Australia
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footbox">
              <h2>Questions?</h2>
              <ul>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>

                <li>
                  Version: {data.site.siteMetadata.version} <br />
                  Gatsby JS / Sanity CMS / Vercel / GitHub <br />
                  Google Analytics is {ga}
                </li>
                <li>
                  <a href="http://instagram.com/chrisbeaumontcom">
                    <img src={insta} alt="Instagram" title="Instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </Container>
    </FooterStyles>
  );
};

export default Footer;

// {textpages.map(el => (
//   <li key={'foot' + el.id}>
//     <Link to={`/${el.slug.current}`} activeClassName="active">
//       {el.name}
//     </Link>
//   </li>
// ))}
