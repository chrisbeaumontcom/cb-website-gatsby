import React from "react"
import Footer from "./Footer"
import { Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar"
import Header from "./Header"
import "normalize.css"
import GlobalStyles from "../../styles/GlobalStyles"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      <Header
        title={data.site.siteMetadata.title}
        subtitle={data.site.siteMetadata.subtitle}
      />
      <Container>
        {children}
        <p>&nbsp;</p>
      </Container>
      <Footer />
    </div>
  )
}
