import React from 'react'
import { Image } from 'react-bootstrap'

export default function ContentRow({ heading, content, image, amenities, layout }) {

  return (
    <section className={`section_content ${layout === 'left' ? 'ct-left-img-right' : 'ct-right-img-left'}`}>
      <div className={`column_content__block ${layout}`}>
        <h2 className="section_heading"
          dangerouslySetInnerHTML={{
            __html: heading
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />

        {amenities &&
          <div className="amenities_list__block">
            <ul className="amenities_list">
              {amenities.edges.map((amenity, index) => (
                <li key={index}>
                  <Image src={amenity.node.image.url} alt={amenity.node.image.alt} />
                  <h5>{amenity.node.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>

      {image.isImage &&
        <div className="column_image__block">
          <div className="image_bg__block" style={{
            backgroundImage: "url(" + image.url + ")"
          }}>
          </div>
        </div>
      }
    </section>
  )
}
