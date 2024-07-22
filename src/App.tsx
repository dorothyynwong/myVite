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
            // reference is needed only, so use selectImg instead of 
            // onClick={() => selectImg(selectedImgUrl)}, 
            // we're not using the function at this stage
            onClick={selectImg}/>  
      </div>
  );
}

export default App
