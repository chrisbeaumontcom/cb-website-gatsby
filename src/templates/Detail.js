import React from "react";
import {Link, graphql} from "gatsby";
import { Row } from "react-bootstrap";
import Img from 'gatsby-image';
import styled from "styled-components";
import PrevAndNext from '../components/PrevAndNext';
import SEO from "../components/seo";
import itemNav from '../utils/itemNav';

const DetailStyles = styled.div`
  div.row {padding-top:2em}
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
    margin:1px;
    padding:1px;
  }
  @media only screen and (max-width: 800px) {
    h4.title {
      margin-top: 15px;
    }
  }
`

// function getNavValuesObj(items, id){
//   const obj = {};
//   for (var i = 0; i < items.length; i++) {
//     if (items[i] === id) {
//       const p = i === 0 ? items.length - 1 : i - 1;
//       obj.previous = items[p];

//       const n = i === items.length - 1 ? 0 : i + 1;
//       obj.next = items[n];

//       break;
//     }
//   }
//   return obj;
// }

export default function SingleArtworkPage({data, location}){

  const artwork = data.artwork;
  const galleries = data.galleries.nodes;
  const artworkList = location.state?.artworkList || [];
  const pandnObj = itemNav(artworkList, artwork.slug.current)
  return (
    <>
      <SEO title={artwork.name} />
      <DetailStyles>
      <Row>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 detailbox">
          <Link to={`/detail/${pandnObj.next}`} state={{ artworkList }}>
            <Img fluid={artwork.image.asset.fluid} alt={artwork.name} />
          </Link>
          {(artworkList.length > 0) &&
          <PrevAndNext artworkList={artworkList} imgurl={artwork.image.asset.fluid.src} current={artwork.slug.current} />
          }
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 detailtext">
          <h4 className="title">{artwork.name}</h4>
          <p>{artwork.description}</p>
          <p>{artwork.year}</p>
          {galleries.map(gallery => {
            return <p><Link to={`/gallery/${gallery.slug.current}`}>{gallery.name}</Link></p>
          })}
        
        </div>
      </Row>
      </DetailStyles>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    artwork: sanityArtwork(slug: {current: {eq: $slug}}) {
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
    galleries: allSanityGallery(filter: {artworks: {elemMatch: {slug: {current: {eq: "still-life-with-lemons-ii"}}}}}) {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
`
