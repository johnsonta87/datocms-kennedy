import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Image } from 'react-bootstrap'
import { Link } from 'react-scroll'

export default function hero({ sitename, logo, image, intro }) {

  return (
    <section className="hero">
      <Image
        className="bg-image hero-bg-image"
        src={image.url}
        alt={`${image.alt || sitename} Exterior View`}
        fluid
        role="banner"
        aria-label="Hero Image" />
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
          <Link
            activeClass="active"
            to="register"
            spy={true}
            smooth={true}
            variant="primary"
            className="hero-btn">
            Register Now
          </Link>
        </Row>
      </Container>
    </section>
  )
}
