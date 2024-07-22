import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import {ImageSelector} from './ImageSelector/ImageSelector.tsx'

function App() {
  const [selectedImgUrl, setSelectedImgUrl] = useState("");

  function selectImg(url: string) {
      setSelectedImgUrl(url);
  }

  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer selectedImgUrl={selectedImgUrl} />
          <ImageSelector 
            selectedImgUrl={selectedImgUrl} 
            onClick={selectImg}/>
      </div>
  );
}

export default App
