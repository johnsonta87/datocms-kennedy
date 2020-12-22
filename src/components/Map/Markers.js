import React from 'react'
import { Image } from 'react-bootstrap'
import { convertToSlug } from '../../utils/helpers'

export default function Markers({ marker }) {
  return (
    <li
      className={`marker-${convertToSlug(marker.node.category)} marker-pin`}
    >
      <span data-tip={`#r-${marker.node.id}`} data-title={marker.node.title}>
        {marker.node.title}
      </span>
    </li>
  )
}
