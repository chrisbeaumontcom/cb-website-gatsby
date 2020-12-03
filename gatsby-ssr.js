/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import Layout from './src/components/Layout/Layout';
import './node_modules/bootstrap/dist/css/bootstrap.css';
//import { GalleryProvider } from './src/components/GalleryContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// export function wrapRootElement({ element }) {
//   return <GalleryProvider>{element}</GalleryProvider>;
// }
