import React, { ReactElement, useState } from "react";  // import React (to provide access to TSX)
import "./ImageSelector.css";

interface ImageSelectorProps {
    src: string;
}

export function ImageSelector({src}: ImageSelectorProps): JSX.Element {
    const [selectedImgUrl, setSelectedImgUrl] = useState("");

    function selectImg() {
        setSelectedImgUrl(src);
    }

    return (                
        <div className="imageSelector">               // return some TSX 
            <button onClick={selectImg}>Click Me!</button>
            <img src={selectedImgUrl}/>
        </div>
        
    );
}