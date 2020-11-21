import React from "react";
import SEO from "../components/seo";
import { Row } from "react-bootstrap";

export default function PrivacyPage(){
  return(
    <>
    <SEO title="Privacy Policy" />
    <Row>
      <div style={{minHeight: 250}}>
      <h2>Privacy</h2>
      <p>See <a href="https://policies.google.com/privacy">Google</a>, 
      <a href="https://www.facebook.com/privacy/explanation">Facebook</a> etc...</p>
      </div>
    </Row>
    </>
  )
}
