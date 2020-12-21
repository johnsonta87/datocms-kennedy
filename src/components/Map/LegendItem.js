import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Markers from './Markers'
import NeighbourhoodListItem from './NeighbourhoodListItem'
import ContextAwareToggle from './ContextAwareToggle'
import { convertToSlug } from '../../utils/helpers'


export default function LegendItem({ data }) {
  const categories = [...new Set(data.edges.map(place => place.node.category))];

  return (
    <>
      <div className="column_content__block left">
        <h2 className="section_heading">Door<br />Step</h2>
        <p className="map-subheading">Explore what’s at your doorstep</p>
        <Accordion defaultActiveKey="0">
          {categories.map((category, index) =>
            <Card key={index}>
              <ContextAwareToggle eventKey={index + 1}>
                <div className={`${convertToSlug(category)}-category marker-category`}>{category}</div>
              </ContextAwareToggle>
              <Accordion.Collapse eventKey={index + 1}>
                <Card.Body>
                  <ol>
                    {data.edges.filter(neighbourhood => (
                      neighbourhood.node.category.includes(category)
                    )).map(place =>
                      <NeighbourhoodListItem key={place.node.id} place={place} />
                    )}
                  </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
        </Accordion>
      </div>

      <div className="column_map__block right">
        <Markers
          data={data} />
      </div>
    </>
  );
}
