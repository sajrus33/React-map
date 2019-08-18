import React, { Component, Fragment } from "react";
import Accordion from "./components/Accordion";
import Popup from "./components/Popup";
import Map from "./components/Map";
import Table from "./components/Table";

class App extends Component {

  state = {
    markers: [],
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 50.00,
      longitude: 20.00,
      zoom: 14.5,
      pitch: 40,
      bearing: 0
    },
    popupShow: false,
    draggedMarkerName: null,
    newMarkerPos: null,
    newMarkerTxt: "location"
  }

  /*   
   resize viewport
  */
  componentDidMount() {
    window.addEventListener('resize', this.resizeMap, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMap);
  }

  resizeMap = () => {
    const viewport = { ...this.state.viewport }
    viewport.width = "100%";
    viewport.height = "100%";
    this.setState({
      viewport
    });
  }

  changeMapViewport = (viewport) => {
    this.setState({ viewport })
  }


  /*
   creating marker
  */
  handleMapClick = ({ lngLat: [lng, lat] }) => {
    this.setState({
      newMarkerPos: { lng, lat },
      popupShow: true
    })
  }

  popupOnChange = e => {
    this.setState({
      newMarkerTxt: e.target.value
    })
  }

  // valid nr for next equal marker name 
  validCounter = 0;
  validateMarkerName = (name) => {
    const notValidName = this.state.markers.find(m => m.name === name)
    if (notValidName) {
      this.validCounter++;
      let newName = name;
      if (this.validCounter > 1) {
        newName = newName.slice(0, -1);
      }
      newName += this.validCounter;

      return this.validateMarkerName(newName)

    } else {
      // reset valid counter
      this.validCounter = 0;
      return name
    }
  }

  popupOnSubmit = e => {
    e.preventDefault();
    const name = this.validateMarkerName(this.state.newMarkerTxt);

    const newMarker = Object.assign({}, this.state.newMarkerPos, { name });
    this.setState({
      markers: [...this.state.markers, newMarker],
      newMarkerTxt: "location",
      popupShow: false
    })
  }

  popupOnCancel = e => {
    this.setState({
      popupShow: false,
      newMarkerTxt: "location"

    })
  }

  /*   
  dragging markers
  */

  dragStart = e => {
    this.setState({
      draggedMarkerName: e.target.innerText
    })
  };

  dragEnd = e => {
    const [acutalLng, actualLat] = e.lngLat;
    const draggedName = this.state.draggedMarkerName;
    const markers = this.state.markers;

    const droppedMarker = markers.find(m => m.name === draggedName);
    const droppedIndex = markers.indexOf(droppedMarker);

    if (droppedIndex >= 0) {
      markers[droppedIndex] = Object.assign(markers[droppedIndex], { lng: acutalLng, lat: actualLat });
      this.setState({
        markers
      })
    }
  };


  render() {
    const { markers, viewport, popupShow } = this.state;
    return (
      <Fragment>
        {popupShow ? <Popup onSubmit={this.popupOnSubmit} onCancel={this.popupOnCancel} onChange={this.popupOnChange} ></Popup> : null}
        <Accordion
          map=
          {<Map
            handleClick={this.handleMapClick}
            changeViewport={this.changeMapViewport}
            markers={markers}
            viewport={viewport}
            onDragStart={this.dragStart}
            onDragEnd={this.dragEnd}
          ></Map>}
          table=
          {<Table markers={markers}></Table>}>
        </Accordion>
      </Fragment>
    )
  }
}
export default App;
