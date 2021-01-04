import React from 'react'
import { Image } from 'react-bootstrap'

export default function footer({ sitename, logo, link, content }) {
  return (
    <footer className="footer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          className="footer-logo"
          src={logo.url}
          alt={logo.alt || sitename}
          title={logo.alt || sitename}
          fluid
          aria-label={`${logo.alt || sitename} Logo`} />
      </a>

      <p>{content}</p>
    </footer>
  )
}
