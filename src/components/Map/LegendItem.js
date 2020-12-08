import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Markers from './Markers'
import { convertToSlug } from '../../utils/helpers'

export default function LegendItem(props) {
  const [isShown, setIsShown] = useState(null);
  const categories = [...new Set(props.data.edges.map(place => place.node.category))];

  return (
    <>
      <div className="column_content__block left">
        <h2 className="section_heading">Door<br />Step</h2>
        <p>Explore what’s at your doorstep</p>
        <Accordion>
          {categories.map((category, index) =>
            <Card key={index}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index + 1}>
                  <h3 className={`${convertToSlug(category)}-category marker-category`}>{category}</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index + 1}>
                <Card.Body>
                  <ol>
                    {props.data.edges.filter(neighbourhood => (
                      neighbourhood.node.category.includes(category)
                    )).map(place =>
                      <li key={place.node.id}>
                        <button
                          className={`${convertToSlug(place.node.category)}-inner-cat`}
                          data-tip={`#r-${place.node.id}`}
                          onMouseEnter={() => {
                            setIsShown(place.node.id)
                          }}
                          onMouseLeave={() => {
                            setIsShown(null)
                          }}
                        >
                          {place.node.title}
                        </button>
                      </li>
                    )}
                  </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
        </Accordion>
      </div>

      <div className="column_map__block right">
        <Markers data={props.data} show={isShown} />
      </div>
    </>
  )
}
