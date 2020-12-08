import React, { useState } from 'react';

const GalleryContext = React.createContext();

export function GalleryProvider({ children }) {
  const [gaOptout, setgaOptout] = useState(false);
  return (
    <GalleryContext.Provider value={[gaOptout, setgaOptout]}>
      {children}
    </GalleryContext.Provider>
  );
}

export default GalleryContext;
