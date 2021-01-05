import React from 'react';
import { Link } from 'gatsby';
import { Carousel } from 'react-bootstrap';
import banner01 from '../../assets/img/layout/banner01zucchinis.jpg';
import banner02 from '../../assets/img/layout/banner02lemons.jpg';
import banner03 from '../../assets/img/layout/banner03artichokes.jpg';
import banner04 from '../../assets/img/layout/banner04cherries.jpg';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  div.container-fluid {
    background-color: #000000;
    padding: 0;
  }
  div.headbanner {
    background-color: #000000;
    padding: 0;
  }
  div.carousel-item img {
    width: 100%;
    height: auto;
  }
  img.imgheader {
    width: 100%;
    height: auto;
  }
  .banner a:hover {
    text-decoration: none;
  }
  .banner h1 {
    color: #ffffff;
    margin: 50px;
    margin-bottom: 2px;
    font-size: 1.6em;
    font-family: Quicksand, Arial, Helvetica, sans-serif;
    font-weight: 300;
  }
  .banner h2 {
    color: #ffffff;
    margin: 50px;
    margin-top: 2px;
    font-size: 1.1em;
    font-family: Quicksand, Arial, Helvetica, sans-serif;
    font-weight: 300;
  }
  @media only screen and (max-width: 650px) {
    .banner h1 {
      margin: 15px 20px 4px 20px;
    }
    .banner h2 {
      margin: 2px 20px 10px 20px;
    }
  }
`;

export default function Header(props) {
  const isHome = props.title === 'Home';
  let classList = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right carobox';
  if (!isHome) {
    classList =
      'col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right d-none d-lg-block';
  }

  return (
    <HeaderStyles>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 banner">
              <Link to="/">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
              </Link>
            </div>

            <div className={classList}>
              <Carousel controls={false} fade={true} indicators={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner01}
                    alt="First slide: Zucchinis"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner02}
                    alt="Second slide: Lemons"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner03}
                    alt="Third slide:Artichokes"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner04}
                    alt="Fourth slide: Cherries"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
