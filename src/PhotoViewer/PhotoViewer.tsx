import React, { ReactElement } from "react";  // import React (to provide access to TSX)
import "./PhotoViewer.css";

interface PhotoViewerProps {
    // src: string;
    selectedImgUrl: string;
}

export function PhotoViewer({selectedImgUrl}: PhotoViewerProps): JSX.Element {
    return (                
        <div className="helloWorld">               
            {/* Hello World! */}
            <img src={selectedImgUrl}/>
        </div>
        
    );
}