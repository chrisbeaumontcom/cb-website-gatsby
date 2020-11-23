import React from "react"
import {graphql} from "gatsby"
import  PortableText from '@sanity/block-content-to-react'
import SEO from "../components/seo"
import { Row } from "react-bootstrap"
import Img from 'gatsby-image'
import styled from 'styled-components';

const HomeStyles = styled.div`
  div.row{margin-bottom: 30px;}
`;

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default function IndexPage ({data}) {
  const itemlist = data.homeItemList.nodes.sort((a , b) => {
    return a.order > b.order;
  });
  return (
    <>
      <SEO title="Welcome" />
      <HomeStyles>

        <div>
          <h2>Hi people</h2>
        </div>

        {itemlist.map((el) => (
          <Row key={el.id}>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <Img fluid={el.image.asset.fluid} alt={el.title} />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <h3 className="title">
                {el.title}
                </h3>
                <PortableText blocks={el._rawContent} serializers={serializers} />
            </div>
          </Row>
        ))}
      </HomeStyles>
    </>
  )
}
export const query = graphql`
  query showHomeItems{
    homeItemList:  allSanityHomeitem (filter: {show: {eq: true}}) {
      nodes {
        id
        title
        order
        _rawContent(resolveReferences: {maxDepth: 30})
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
}
`
