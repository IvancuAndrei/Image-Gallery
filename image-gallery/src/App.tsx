import React, { useEffect, useState } from "react";
import fetchImages from "./hooks/useFetchImages";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  return (
    <>
      <GalleryPage></GalleryPage>
    </>
  );
};

export default App;
