import React, { Component } from "react";
import AccordionBs from "./components/Accordion";

import Map from "./components/Map";
import Table from "./components/Table";





class App extends Component {

  state = {
    markers: [],
    viewport: {
      latitude: -37.8136,
      longitude: 144.96332,
      zoom: 14.5,
      pitch: 40,
      bearing: 0
    },
  }

  draggedMarkerPos = null;

  changeMapViewport = (viewport) => {
    this.setState({ viewport })
  }
  handleMapClick = ({ lngLat: [lng, lat] }) => {

    this.setState({
      markers: [...this.state.markers, { lng, lat }]
    })
  }



  dragStart = e => {
    this.draggedMarkerPos = e.lngLat;
  };



  dragEnd = e => {
    const [draggedLng, draggedLat] = this.draggedMarkerPos;
    const markers = this.state.markers;
    const [acutalLng, actualLat] = e.lngLat;

    const droppedMarker = markers.filter(m =>
      m.lng === draggedLng && m.lat === draggedLat);
    const droppedIndex = markers.indexOf(droppedMarker[0]);
    if (droppedIndex >= 0) {
      markers[droppedIndex] = { lng: acutalLng, lat: actualLat };
      this.setState({
        markers
      });
    }

  };
  render() {

    return (
      <div>

        <AccordionBs
          map={<Map
            handleClick={this.handleMapClick}
            changeViewport={this.changeMapViewport}
            markers={this.state.markers}
            viewport={this.state.viewport}
            dragStart={this.dragStart}
            dragEnd={this.dragEnd}
          >
          </Map>}
          table={<Table></Table>}> </AccordionBs>
      </div>
    )

  }

}



export default App;
