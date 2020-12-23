import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import { init, sendForm } from 'emailjs-com';
init('user_8do5i87Ii765gdJI1jRcq');

export default function EmailJSForm() {
  const { register, handleSubmit, errors } = useForm();
  const errorMsg = 'This field is required';
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm('default_service', 'template_tq0t33c', '#reg-form')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="reg-form" className="reg-form">
      <div className="form-column">
        <div className="form-field">
          <input type="text" name="firstName" ref={register({ required: true })} placeholder="First name" />
          {errors.firstName && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <input type="text" name="lastName" ref={register({ required: true })} placeholder="Last name" />
          {errors.lastName && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <input type="email" name="email" ref={register({ required: true })} placeholder="Email address" />
          {errors.email && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <input type="text" name="phone" ref={register({ required: true })} placeholder="Phone" />
          {errors.phone && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <input type="text" name="postalCode" ref={register({ required: true })} placeholder="Postal Code" />
          {errors.postalCode && <span className="error-field">{errorMsg}</span>}
        </div>
      </div>
      <div className="form-column">
        <div className="form-field">
          <select name="hearUs" ref={register({ required: true })}>
            <option defaultChecked>How did you hear about us?</option>
            <option value="website">Website</option>
            <option value="magazine">Magazine</option>
            <option value="other">other</option>
          </select>
          {errors.hearUs && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <select name="priceRange" ref={register({ required: true })}>
            <option defaultChecked>What's your desired price range?</option>
            <option value="100,000-200,000">$100,000-200,000</option>
            <option value="200,000-300,000">$200,000-300,000</option>
          </select>
          {errors.priceRange && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <select name="realtor" ref={register({ required: true })}>
            <option defaultChecked>Are you a realtor?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.realtor && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <select name="workWithRealtor" ref={register({ required: true })}>
            <option defaultChecked>Are you working with a realtor?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.workWithRealtor && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field subscription-field">
          <p className="subscription-text">Would you like to receive emails from Gable View Homes, its affiliates and agents, with pricing, floor plans, and site updates?
          </p>
          <div className="sub-radio-field">
            <input type="radio" name="subscription" value="Yes" />
            <label htmlFor="Yes">Yes</label>
          </div>
          <div className="sub-radio-field">
            <input type="radio" name="subscription" value="No" />
            <label htmlFor="No">No</label>
          </div>
        </div>

        <div className="form-field">
          <input type='hidden' name='contact_number' value={contactNumber} />

          <div className="form-submit">
            <Button variant="primary" type="submit" className="btn-reg">Register Now</Button>
          </div>
        </div>
      </div>
    </form>
  )
}
