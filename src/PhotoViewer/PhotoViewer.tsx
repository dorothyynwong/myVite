import React, { ReactElement } from "react";  // import React (to provide access to TSX)
import "./PhotoViewer.css";

interface PhotoViewerProps {
    src: string;
}

export function PhotoViewer({ src }: PhotoViewerProps): JSX.Element {
    return (                
        <div className="helloWorld">               
            Hello World!
            <img src={src}/>
        </div>
        
    );
}