/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import Layout from "./src/components/Layout/Layout";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "./src/assets/style.css";
//import {GalleryProvider } from './src/components/GalleryContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// export function wrapRootElement({element}){
//   return <GalleryProvider>{element}</GalleryProvider>
// }