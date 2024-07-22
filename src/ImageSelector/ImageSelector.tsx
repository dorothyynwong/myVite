import React, { ReactElement, useState } from "react";  // import React (to provide access to TSX)
import "./ImageSelector.css";

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

interface ImageSelectorProps {
    selectedImgUrl: string;
    onClick: (url: string) => void;
}

export function ImageSelector({selectedImgUrl, onClick}: ImageSelectorProps): JSX.Element {

    const imgItems = imageUrls.map(imageUrl => 
        <img 
            src={imageUrl} 
            className={(selectedImgUrl === imageUrl)? "selected" : "unselected"} 
            onClick={() => onClick(imageUrl)}
        />
    );
    

    return (                
        <div className="imageSelector">              
            {imgItems}
        </div>
        
    );
}