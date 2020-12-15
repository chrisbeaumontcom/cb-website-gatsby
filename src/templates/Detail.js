import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PrevAndNext from '../components/PrevAndNext';
import SEO from '../components/seo';
import itemNav from '../utils/itemNav';

const DetailStyles = styled.div`
  div.detailbox {
    padding-left: 0;
    padding-right: 0;
  }
  div.detailbox img.artwork {
    width: 100%;
    max-width: 700px;
    height: auto;
  }
  a.gallerylink {
    color: black;
  }
  div.detailtext p {
    margin: 1px;
    padding: 1px;
  }
  @media only screen and (max-width: 800px) {
    h4.title {
      margin-top: 15px;
    }
  }
`;

export default function SingleArtworkPage({ data, location }) {
  const artwork = data.artwork;
  const galleries = data.galleries.nodes;
  const artworkList = location.state?.artworkList || [];
  const pandnObj = itemNav(artworkList, artwork.slug.current);

  return (
    <>
      <SEO title={artwork.name} />
      <DetailStyles>
        <div className="row" style={{ marginTop: 30, marginBottom: 30 }}>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 detailbox">
            {artworkList.length > 0 && (
              <div>
                <Link to={`/detail/${pandnObj.next}`} state={{ artworkList }}>
                  <Img fluid={artwork.image.asset.fluid} alt={artwork.name} />
                </Link>
                <PrevAndNext
                  artworkList={artworkList}
                  imgurl={artwork.image.asset.fluid.src}
                  current={artwork.slug.current}
                />
              </div>
            )}
            {artworkList.length === 0 && (
              <Img fluid={artwork.image.asset.fluid} alt={artwork.name} />
            )}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 detailtext">
            <h4 className="title">{artwork.name}</h4>
            <p>{artwork.description}</p>
            <p>{artwork.year}</p>
            {galleries.map(gallery => {
              return (
                <p>
                  <Link to={`/gallery/${gallery.slug.current}`}>
                    {gallery.name}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
      </DetailStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    artwork: sanityArtwork(slug: { current: { eq: $slug } }) {
      id
      name
      description
      width
      height
      medium
      year
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    galleries: allSanityGallery(
      filter: { artworks: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
`;
