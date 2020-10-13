import React from 'react'
import neighbourhoods from '../utils/data'

export default function Markers(props) {
  return (
    <div className="map-markers">
      <ul>
        {neighbourhoods.map(neighbourhood =>
          neighbourhood.places.map(marker =>
            <li
              key={marker.id}
              id="marker"
              className={`marker-pin${props.show === marker.id ? ' active' : ''}`}
            >
              <span data-tip={`#r-${marker.id}`} data-title={marker.title}>
                {marker.title}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
