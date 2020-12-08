import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import LegendItem from './LegendItem'

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
        <section className="section_content ct-left-img-right map-accordion-legend">
          <LegendItem data={data.allDatoCmsNeighbourhood} />
        </section>
      )}
    />
  )
}
