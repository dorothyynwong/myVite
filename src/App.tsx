import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import {ImageSelector} from './ImageSelector/ImageSelector.tsx'

const brokenImages = [
  1, 24, 32, 36, 44, 47
];

function getImageUrls() {
  const urls = [];

  for (let i = 0; i < 50; i++) {
      if (!brokenImages.includes(i)) {
          const imageNumberString = i.toString().padStart(2, '0');
          urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
      }
  }

  return urls;
}

export const imageUrls = getImageUrls();

function App() {
  const imgItems = imageUrls.map(imageUrl =>
    <ImageSelector src={imageUrl} />
  );

  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src="https://picsum.photos/id/600/1600/900.jpg"/>
          {imgItems}
      </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
