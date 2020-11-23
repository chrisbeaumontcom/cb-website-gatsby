import React from "react";
import {graphql} from "gatsby"
import styled from "styled-components"
import  PortableText from '@sanity/block-content-to-react'
import SEO from "../components/seo"

const CvStyles = styled.div`
  h3 {
    color: #333333;
    font-size: 1.4rem;
  }
  p {
    color: #333333;
    font-size: 0.8rem;
  }
  ul {margin:0;padding:0;}
  ul li {
    list-style-type: none;
    color: #333333;
    font-size: 0.8rem;
  }
`
const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default function TextPage ({data}) { 
  
  const textpage = data.textpage;

  return (
    <>
      <SEO title={textpage.name} />
      <CvStyles>
        <h2>{textpage.name}</h2>
        <PortableText blocks={textpage._rawContent} serializers={serializers} />
      </CvStyles>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    textpage: sanityPost(slug: {current: {eq: $slug}}) {
      _rawContent(resolveReferences: {maxDepth: 100})
      name
      slug {
        current
      }
    }
  }
`
