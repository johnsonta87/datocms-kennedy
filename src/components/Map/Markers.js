import React from 'react'

export default function Markers(props) {
  return (
    <div className="map-markers">
      <ul>
        {props.data.edges.map(marker =>
          <li
            key={marker.node.id}
            id="marker"
            className={`marker-pin${props.show === marker.node.id ? ' active' : ''}`}
          >
            <span data-tip={`#r-${marker.node.id}`} data-title={marker.node.title}>
              {marker.node.title}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}
