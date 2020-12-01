import { useState, useContext } from 'react';
import GalleryContext from '../components/GalleryContext';

export default function useGallery() {
  //const [gallery, setGallery] = useState([]);
  const [gallery, setGallery] = useContext(GalleryContext);
  //console.log(test);
  // function setGallery(newGallery){
  //   setGallery([...gallery, newGallery]);
  // }
  // function clearGallery(){
  //   setGallery([...gallery, gallery.splice(0,gallery.length)]);
  // }

  return {
    gallery,
    setGallery,
  };
}
