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
      <div className="column_content__block left neighbourhood-header">
        <h2 className="section_heading">Door<br />Step</h2>
        <p className="map-subheading">Explore what’s at your doorstep</p>
        <Accordion defaultActiveKey="1">
          {categories.map((category, index) =>
            <Card key={index} className="map-card">
              <ContextAwareToggle
                eventKey={index + 1}>
                <div
                  className={`${convertToSlug(category)}-category marker-category`}
                >
                  {category}
                </div>
              </ContextAwareToggle>
              <Accordion.Collapse id={`list-${index + 1}`} eventKey={index + 1}>
                <Card.Body>
                  <ol>
                    {data.edges.filter(neighbourhood => (
                      neighbourhood.node.category.includes(category)
                    )).map(place =>
                      <NeighbourhoodListItem key={place.node.id} place={place} />
                    )}
                  </ol>

                  <div className="map-markers">
                    <ul>
                      {data.edges.filter(neighbourhood => (
                        neighbourhood.node.category.includes(category)
                      )).map(marker =>
                        <Markers
                          key={marker.node.id}
                          marker={marker} />
                      )}
                      <span className="main_marker"></span>
                    </ul>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
        </Accordion>
      </div>

      <div className="map-container">
        <div className="map-img">
          <span className="main_marker"></span>
        </div>
      </div>
    </>
  );
}
