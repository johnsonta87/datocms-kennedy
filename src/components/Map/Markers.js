import React from 'react'
import { convertToSlug } from '../../utils/helpers'

export default function Markers({ marker }) {

  return (
    <li
      title={marker.node.title}
      aria-label={`${marker.node.title} Icon`}
      className={`marker-${convertToSlug(marker.node.category)} marker-pin`}
      style={{ left: `${marker.node.leftCssPosition}`, top: `${marker.node.topCssPosition}` }}
    >
      <span data-tip={`#r-${marker.node.id}`} data-title={marker.node.title}>
      </span>
    </li>
  )
}
