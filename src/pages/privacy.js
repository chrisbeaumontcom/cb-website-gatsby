import React, { useContext } from 'react';
import GalleryContext from '../components/GalleryContext';

export default function PrivacyPage() {
  const [gaOptin, setgaOptin] = useContext(GalleryContext);

  return (
    <>
      <h2>Privacy Policy</h2>
      <p>This site uses Google Analytics but with Anonymized IP address.</p>
      <p>
        {gaOptin && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setgaOptin(false);
              window.gaOptout();
            }}
          >
            Turn off
          </button>
        )}{' '}
        Google Analytics {!gaOptin && <span> Is Off</span>}
      </p>
      <p>This site does not use Facebook Pixel.</p>

      <p>
        See{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google
        </a>{' '}
        &{' '}
        <a
          href="https://www.facebook.com/privacy/explanation"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>{' '}
        privacy blurbs...
      </p>
      <p>
        <em>How to Destroy 'Surveillance Capitalism'</em>
        <br />
        Surveillance capitalism is just capitalism - with surveillance.{' '}
        <a
          href="https://onezero.medium.com/how-to-destroy-surveillance-capitalism-8135e6744d59"
          target="_blank"
          rel="noreferrer"
        >
          Here’s how to beat it
        </a>
        .<br />
        Cory Doctorow Aug 26, 2020 (109 min read)
      </p>
    </>
  );
}
