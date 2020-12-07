import { useContext } from 'react';
import GalleryContext from '../components/GalleryContext';

export default function useGallery() {
  const [galleryOptions, setgalleryOptions] = useContext(GalleryContext);

  function setGaOptIn() {
    galleryOptions.optinGA = false;
    setgalleryOptions(galleryOptions);
    console.log('galleryOptions', galleryOptions);
    if (typeof window.gaOptout !== 'undefined') {
      window.gaOptout();
    } else {
      console.log('gaOptout undefined');
    }
  }
  return {
    setGaOptIn,
  };
}
