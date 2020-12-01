import React, { useState } from 'react';

const GalleryContext = React.createContext();

export function GalleryProvider({ children }) {
  const [gallery, setGallery] = useState([]);
  return (
    <GalleryContext.Provider value={[gallery, setGallery]}>
      {children}
    </GalleryContext.Provider>
  );
}

export default GalleryContext;
