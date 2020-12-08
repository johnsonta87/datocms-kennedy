import React from 'react'
import { Marker } from 'google-maps-react';

export default function Markers(props) {
  return (
    <div className="map-markers">
      {props.data.edges.map(marker =>
        <Marker key={marker.node.id}
          name={marker.node.title}
          position={marker.node.location && { lat: marker.node.location.latitude, lng: marker.node.location.longitude }}
          title={marker.node.category}
        />
      )}
    </div>
  )
}
