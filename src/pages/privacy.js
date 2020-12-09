import React from 'react';
//import GalleryContext from '../components/GalleryContext';, { useContext }
import Cookies from 'universal-cookie';

export default function PrivacyPage() {
  //const [gaOptout, setgaOptout] = useContext(GalleryContext);
  const cookies = new Cookies();
  const disableStr =
    'ga-disable-' + (process.env.GATSBY_ANALYTICS_TRACKING_ID || 'test');
  const gaCookie = cookies.get(disableStr);
  const gaOptin = !(gaCookie === 'true'); //gaOptout ||

  return (
    <>
      <h2>Privacy Policy</h2>
      {gaOptin && (
        <p>
          This site uses Google Analytics but with Anonymized IP address.
          <br />
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              //setgaOptout(true);
              if (typeof window.gaOptout !== 'undefined') {
                window.gaOptout();
              } else {
                cookies.set(disableStr, true, { path: '/' });
              }
            }}
          >
            Turn off Google Analytics
          </button>{' '}
        </p>
      )}
      {!gaOptin && <p>Google Analytics is turned off on this site.</p>}
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
