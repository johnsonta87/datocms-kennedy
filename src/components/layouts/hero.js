import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function hero({ sitename, logo, image, intro }) {

  return (
    <div className="hero" style={{
      backgroundImage: "url(" + image.url + ")"
    }}>
      <Container className="hero-container">
        <Row className="justify-content-center">
          <Image className="logo" src={logo.url} alt={logo.alt || sitename} fluid />
        </Row>
        <Row className="justify-content-center">
          <div className="hero-headline"
            dangerouslySetInnerHTML={{
              __html: intro
            }}
          />
        </Row>
        <Row className="justify-content-center">
          <Button variant="primary" className="hero-btn">Register Now</Button>
        </Row>
      </Container>
    </div>
  )
}
