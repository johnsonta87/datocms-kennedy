import React from 'react'
import Form from './Form'

export default function Register({ heading, content, image }) {
  return (
    <>
      <div id="register" className="registration-header">
        <div className="space_block"></div>
        <h2 className="section_heading reg-heading"
          dangerouslySetInnerHTML={{
            __html: heading
          }}
        />
      </div>
      <div className="register_form__wrapper">
        {image.isImage &&
          <div className="column_image__block">
            <div className="image_bg__block" style={{
              backgroundImage: "url(" + image.url + ")"
            }}>
            </div>
          </div>
        }

        <div className="column_content__block">

          <div className="register_form__inner">
            <div
              dangerouslySetInnerHTML={{
                __html: content
              }}
            />

            <Form />
          </div>
        </div>
      </div>
    </>
  )
}
