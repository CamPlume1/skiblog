import React from "react";
import CollageComponent from "../components/Layout/Collage/CollageComponent.tsx";

const Trips: React.FC = () => {
    const images = [
        "./assets/background.jpg",
        "./assets/background.jpg",
        "./assets/background.jpg",
        "./assets/background.jpg"
    ];

    return (
        <CollageComponent
            title="Trip #1"
            content="Here is a blog post about the trip. Itinerary, best wipeouts, etc. This will focus on the East coast independent/backcountry mountain skiied, as well as ongoing sustainability efforts at that mountain"
            images={images}
        />
    );

} 

export default Trips;