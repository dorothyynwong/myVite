import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import {ImageSelector, imageUrls} from './ImageSelector/ImageSelector.tsx'

function App() {
  const randomInd = Math.round(Math.random() * 50);
  const [selectedImgUrl, setSelectedImgUrl] = useState(imageUrls[randomInd]);

  // function selectImg(url: string) {
  //     setSelectedImgUrl(url);
  // }

  return (
      <div className="photoViewer">
          <h1>React Photo Viewer</h1>
          <PhotoViewer selectedImgUrl={selectedImgUrl} />
          <ImageSelector 
            selectedImgUrl={selectedImgUrl} 
            // reference is needed only, so use selectImg instead of 
            // onClick={() => selectImg(selectedImgUrl)}, 
            // we're not using the function at this stage

            // can use setSelectedImgUrl directly, no need for selectImg
            // onClick={selectImg} />
            setSelectedImgUrl={setSelectedImgUrl}/>  

      </div>
  );
}

export default App
