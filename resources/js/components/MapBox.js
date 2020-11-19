// import React from 'react';
// import Search from "react-leaflet-search";

// const searchComponent = (props) => <ReactLeafletSearch position="topleft" />;
// const searchComponent = props => (
//     <ReactLeafletSearch
//               position="topleft"
//               provider="BingMap"
//               providerOptions={{providerKey:"{BINGMAP_KEY}"}} />
//   )
//   const searchComponent = (props) => <ReactLeafletSearch position="topleft" provider="OpenStreetMap" providerOptions={{ region: "gb" }} />;
  
//   const customProvider = {
//     search: async (inputValue: string) => {
//       // do fetch or anything
//       return {
//         info: Array<{
//                         bounds: boundingBox,
//                         latitude: number,
//                         longitude: number,
//                         name: displayName
//                     }> | string,
//         raw: rawResponse
//       }
//     }
//   }
//   const component = <ReactLeafletSearch customProvider={customProvider} />
//   const myIcon = L.icon({
//     iconUrl: "marker-icon.png",
//     iconRetinaUrl: "marker-icon-2x.png",
//     shadowUrl: "marker-shadow.png",
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     tooltipAnchor: [16, -28],
//     shadowSize: [41, 41]
// });

// <ReactLeafletSearch position="topleft" markerIcon={myIcon} />;