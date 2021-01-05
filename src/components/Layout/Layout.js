import React from 'react';
import Footer from './Footer';
import { useStaticQuery, graphql } from 'gatsby';
import NavBar from './NavBar';
import Header from './Header';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';

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
  );
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Header
        title={data.site.siteMetadata.title}
        subtitle={data.site.siteMetadata.subtitle}
      />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
