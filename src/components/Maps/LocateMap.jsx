import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={6}
      //defaultCenter={{ lat: props.latitude, lng: props.longitude }}
      defaultCenter={{ lat: -2.203816, lng:	-79.897453 }}
      //defaultCenter={{ lat: 52.03638889, lng: -72.93083333 }}

      defaultOptions={{
        scrollwheel: true,
        zoomControl: true,
        mapTypeId: "satellite",
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
    {/* <Marker position={{ lat: 52.03638889, lng: -72.93083333 }} title={props.name}/> */}
<Marker position={{ lat: -2.191198, lng: -79.879930 }} />

    </GoogleMap>
  ))
);



function LocateMap({ ...props }) {

  return (
      <div >
        <CustomSkinMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIKtIpp2m2PDlNBRHy2F9F2LzJMYXWb3U"
          loadingElement={<div style={{ height: `100%`}} />}

          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

        </div>

  );
}

export default LocateMap;
