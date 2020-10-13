import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Markers from './Markers'

export default function LegendItem(props) {
  const [isShown, setIsShown] = useState(null);
  const categories = [...new Set(props.data.edges.map(place => place.node.category))];

  return (
    <div className="map-accordion-legend">
      <Accordion>
        {categories.map((category, index) =>
          <Card key={index}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index + 1}>
                <h3>{category}</h3>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index + 1}>
              <Card.Body>
                <ol>
                  {props.data.edges.filter(neighbourhood => (
                    neighbourhood.node.category === category
                  )).map(place =>
                    <li key={place.node.id}>
                      <a
                        data-tip={`#r-${place.node.id}`}
                        onMouseEnter={() => {
                          setIsShown(place.node.id)
                        }}
                        onMouseLeave={() => {
                          setIsShown(null)
                        }}
                      >{place.node.title}</a>
                    </li>
                  )}
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )}
      </Accordion>

      <Markers data={props.data} show={isShown} />
    </div>
  )
}
