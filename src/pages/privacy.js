import React from "react";
import SEO from "../components/seo";
import { Row } from "react-bootstrap";


export default function PrivacyPage(){
  const handleClick = () => {
    window.gaOptout();
  }
  
  return(
    <>
    <SEO title="Privacy Policy" />
    <Row>
      <div style={{minHeight: 350}}>
      <h2>Privacy</h2>
      <p>This site uses Google Analytics but not Facebook Pixel.</p>
      <p>You can opt out of Google Analytics tracking by clicking here: <button className="btn btn-primary btn-sm" onClick={handleClick}>Deactivate Google Analytics</button></p>
      <p>See <a href="https://policies.google.com/privacy">Google</a>, <a href="https://www.facebook.com/privacy/explanation">Facebook</a> etc...</p>
      <p><strong>How to Destroy 'Surveillance Capitalism'</strong><br/>
      Surveillance capitalism is just capitalism - with surveillance. <a href="https://onezero.medium.com/how-to-destroy-surveillance-capitalism-8135e6744d59">Here’s how to beat it.</a><br/>
      Cory Doctorow Aug 26, 2020 (109 min read)</p>
      </div>
    </Row>
    </>
  )
}
