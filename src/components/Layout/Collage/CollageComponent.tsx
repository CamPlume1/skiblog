import React from "react";
import "./CollageComponent.css"; // External CSS for styling

interface CollageComponentProps {
    title: string;
    content: string;
    images: string[];
}

const CollageComponent: React.FC<CollageComponentProps> = ({ title, content, images }) => {

    console.log(/*present working directory*/)
    return (
        <div className="collage-container">
            <div className="text-content">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <div className="image-collage">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`collage-${index}`} className="collage-image" />
                ))}
            </div>
        </div>
    );
};

export default CollageComponent;