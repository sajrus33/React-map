import React, { Component } from "react";
import InteractiveMap, { Marker } from "react-map-gl";

/**
 * Note you have to pass a child to <Marker />
 * as it just places an element at the correct
 * position.
 */

const Map = props => {

    return (
        <div style={{ height: "100vh" }}>
            <InteractiveMap
                width="100%"
                height="100%"
                onClick={props.handleClick}
                mapboxApiAccessToken="pk.eyJ1Ijoic2FqcnVzMzMiLCJhIjoiY2p6ZmQ5Y3hhMGF6MjNocWs3Mnd0ZzhzZCJ9.euviib6S8dQJyse2LRvtTw"
                onViewportChange={props.changeViewport}
                {...props.viewport}>

                {props.markers.length
                    ? props.markers.map((m, i) => (
                        <Marker draggable
                            onDragStart={props.dragStart}
                            onDrag={props.drag}
                            onDragEnd={props.dragEnd}
                            latitude={m.lat}
                            longitude={m.lng}
                            key={i}>
                            {`Custom name`}
                        </Marker>
                    ))
                    : null}
            </InteractiveMap>
        </div>)

}



export default Map;
