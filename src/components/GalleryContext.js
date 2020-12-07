import React, { useState } from 'react';

const GalleryContext = React.createContext();

export function GalleryProvider({ children }) {
  const [gaOptin, setgaOptin] = useState(true);
  return (
    <GalleryContext.Provider value={[gaOptin, setgaOptin]}>
      {children}
    </GalleryContext.Provider>
  );
}

export default GalleryContext;
