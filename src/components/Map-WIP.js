import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import LegendItem from './LegendItem'
import Markers from './Markers'

export default function Map() {
  return (
    <StaticQuery
      query={graphql`
        query NeighbourhoodQuery {
          allDatoCmsNeighbourhood(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                id
                title
                category
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <LegendItem data={data.allDatoCmsNeighbourhood} />
          <Markers data={data.allDatoCmsNeighbourhood} />
        </div>
      )}
    />
  )
}
