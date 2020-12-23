import React from 'react'
import { convertToSlug } from '../../utils/helpers'

export default function NeighbourhoodListItem({ place }) {
  return (
    <li
      className={`${convertToSlug(place.node.category)}-inner-cat`}
      data-tip={`#r-${place.node.id}`} >
      { place.node.title}
    </li>
  )
}
