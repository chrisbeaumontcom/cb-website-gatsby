import React from 'react';
import SEO from '../components/seo';
import { Row } from 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <Row>
        <div style={{ minHeight: 250 }}>
          <h1>People it's a 404: Not Found</h1>
          <p>
            Sorry, we can't find that page... exhale, and go to the menu above.
          </p>
        </div>
      </Row>
    </>
  );
}
