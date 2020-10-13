import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import neighbourhoods from '../utils/data'
import Markers from './Markers'

export default function LegendItem() {
  const [isShown, setIsShown] = useState(null);

  return (
    <div className="map-accordion-legend">
      <Accordion>
        {neighbourhoods.map((neighbourhood, index) => (
          <Card key={index}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={neighbourhood.id}>
                <h3>{neighbourhood.name}</h3>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={neighbourhood.id}>
              <Card.Body>
                <ol>
                  {neighbourhood.places.map(place =>
                    <li key={place.id}>
                      <a
                        data-tip={`#r-${place.id}`}
                        onMouseEnter={() => {
                          setIsShown(place.id)
                        }}
                        onMouseLeave={() => {
                          setIsShown(null)
                        }}
                      >{place.title}</a>
                    </li>
                  )}
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>

      <Markers show={isShown} />
    </div>
  )
}
