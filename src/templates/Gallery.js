import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row } from 'react-bootstrap';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import styled from 'styled-components';

const GalleryStyles = styled.div`
  h4 {
    font-size: 1.2em;
    font-style: italic;
    margin-bottom: 2px;
    padding-left: 0;
    padding-top: 0;
  }
  div.itembox {
    text-align: left;
    font-size: 12px;
    margin-bottom: 15px;
    position: relative;
  }
  div.itembox p {
    margin: 1px;
    padding: 1px;
  }
  @media only screen and (min-width: 650px) {
    div.itembox {
      padding: 15px;
    }
  }
  div.textbox {
    position: relative;
  }
`;

export default function SingleGalleryPage({ data }) {
  const name = data.gallery.name;
  const artworks = data.gallery.artworks;
  const artworkList = artworks.map(item => {
    return item.slug.current;
  });

  return (
    <>
      <SEO title={name} />
      <GalleryStyles>
        <h2>{name}</h2>
        <Row>
          {artworks.map((el, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index}>
              <div className="itembox">
                <Link
                  to={`/detail/${el.slug?.current}`}
                  state={{ artworkList }}
                >
                  <Img fluid={el.image.asset.fluid} alt={el.name} />
                </Link>
                <h4 className="title">{el.name}</h4>
                <p>{el.description}</p>
                <p>{el.year}</p>
              </div>
            </div>
          ))}
        </Row>
      </GalleryStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    gallery: sanityGallery(slug: { current: { eq: $slug } }) {
      name
      slug {
        current
      }
      artworks {
        name
        description
        year
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
