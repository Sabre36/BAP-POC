import React from "react";
import Gallery from "react-photo-gallery";

var croatia = process.env.PUBLIC_URL + '/bap/ASI_Croatia aquaculture_Nightman.jpeg';
var facfarms = process.env.PUBLIC_URL + '/bap/OurFacilities_Farms.png';
var healthy =  process.env.PUBLIC_URL + '/bap/ResponsibleAquacultureIs_HealthyPlanet.png';
var healthypeople = process.env.PUBLIC_URL + '/bap/ResponsibleAquacultureIs_HealthyPeople.png';
var bluefish = process.env.PUBLIC_URL + '/bap/fishies-and-waves-new-blue.jpg';
var cert = process.env.PUBLIC_URL + '/bap/BAP_quality_assurance.jpg';
var feedmill = process.env.PUBLIC_URL + '/bap/OurFacilities_FeedMill.png';
var salmon = process.env.PUBLIC_URL + '/bap/OurProducts_Salmon.png';
var shrimp = process.env.PUBLIC_URL + '/bap/OurProducts_Shrimp.png';
var communicates = process.env.PUBLIC_URL + '/bap/ResponsibleAquacultureIs_HealthyCommunicaties.png';
var hatchery = process.env.PUBLIC_URL + '/bap/OurFacilities_Hatchery.png';
var preparedsalmon = process.env.PUBLIC_URL + '/bap/prepared_salmon.jpg';
var ani1 = process.env.PUBLIC_URL + '/bap/ani-places.gif';
var ani2 = process.env.PUBLIC_URL + '/bap/ani-food.gif';
var ani3 = process.env.PUBLIC_URL + '/bap/ani-people.gif';



const photos = [
    { src: salmon, width: 1, height: 1},
    { src: ani2, width: 2, height: 1 },
    { src: cert, width: 2, height: 2 },

    { src: ani3, width: 2, height: 3 },
    { src: ani1, width: 1, height: 1 },
    { src: shrimp, width: 2, height: 2},
];

class TrainingGallery extends React.Component {

    render() {
        return (
            <Gallery photos={photos} direction={"column"} columns={"3"} />
        );
    }
}

export default TrainingGallery;
