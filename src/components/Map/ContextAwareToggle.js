import React, { useContext } from 'react'
import { AccordionContext } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card'

export default function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card.Header>
      <button
        type="button"
        onClick={decoratedOnClick}
        className={`marker-category-header${isCurrentEventKey && ' active'}`}
      >
        {children}
      </button>
    </Card.Header>
  );
}
