import React from "react";
import InteractiveMap, { Marker } from "react-map-gl";


const Map = props => {
    const { handleClick, changeViewport, viewport, markers, onDragStart, onDragEnd } = props;
    return (

        <InteractiveMap
            onClick={handleClick}
            mapboxApiAccessToken="pk.eyJ1Ijoic2FqcnVzMzMiLCJhIjoiY2p6ZmQ5Y3hhMGF6MjNocWs3Mnd0ZzhzZCJ9.euviib6S8dQJyse2LRvtTw"
            onViewportChange={changeViewport}
            {...viewport}
        >
            {markers.length
                ? markers.map((m, i) => (
                    <Marker
                        draggable
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        latitude={m.lat}
                        longitude={m.lng}
                        key={i}>
                        {m.name}
                    </Marker>
                ))
                : null}
        </InteractiveMap>
    )

}



export default Map;
