import React from "react"
import {graphql} from "gatsby"
import  PortableText from '@sanity/block-content-to-react'
import SEO from "../components/seo"
import { Row } from "react-bootstrap"
import Img from 'gatsby-image'

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
  const homepage = data.homepage;

  return (
    <>
      <SEO title="Welcome" />
        <div>
          <h2>{homepage.title}</h2>
          <PortableText blocks={homepage._rawIntro} serializers={serializers} />
        </div>

        {homepage.homeitems.map((el) => (
          <Row key={el.id} style={{marginBottom: 20}}>
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
      
    </>
  )
}
export const query = graphql`
  query getHomepage {
    homepage: sanityHomepage(id: {eq: "-b8fafbd6-af36-5641-8194-9fc78fdc1d6a"}) {
      title
      _rawIntro(resolveReferences: {maxDepth: 5})
      homeitems {
        title
        show
        order
        _rawContent(resolveReferences: {maxDepth: 5})
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
