import React from 'react'
import { convertToSlug } from '../../utils/helpers'

export default function Markers({ data, show }) {
  return (
    <div className="map-markers">
      <ul>
        {data.edges.map(marker =>
          <li
            key={marker.node.id}
            className={`marker-${convertToSlug(marker.node.category)} marker-pin${show === marker.node.id ? ' active' : ''}`}
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
