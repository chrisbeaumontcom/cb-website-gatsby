import React from 'react';
import portrait from '../assets/img/serge_photo_300x305.jpg';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import SEO from '../components/seo';

const ContactStyles = styled.div`
  img.port {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 30px auto;
  }
  @media only screen and (min-width: 600px) {
  }
  .bord {
    border: 1px dotted blue;
  }
`;

export default function ContactPage() {
  return (
    <ContactStyles>
      <SEO title="Contact" />
      <div className="row">
        <div className="col">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <ContactForm />
        </div>
        <div className="col-lg-6 text-center">
          <img
            className="port"
            src={portrait}
            alt="Portrait of CB by Serge Thoman"
          />
        </div>
      </div>
    </ContactStyles>
  );
}
