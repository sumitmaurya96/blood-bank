import React, { Component } from "react";
import HEREMap from "react-here-maps";

export default class Map extends Component {
  render() {
    // center the map somewhere in London
    const center = {
      lat: 27.2,
      lng: 77.5
    };

    return (
      <HEREMap
        appId={"6qjoVsFDLVuAtjfI0Eys"}
        appCode={"iz_Fgtl-Cl88NxrUeHODcwstFbrHOfnrBKw-qldZN3U"}
        center={center}
        zoom={8}
        hidpi={true}
      />
    );
  }
}
