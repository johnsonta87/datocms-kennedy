import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Form() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postal, setPostal] = useState('');
  const [HOWDIDU, setHOWDIDU] = useState('');
  const [PRICER, setPRICER] = useState('');
  const [AREUREALTO, setAREUREALTO] = useState('');
  const [WORKREALTR, setWORKREALTR] = useState('');

  const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  const emailValidation = email => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
      )
    ) {
      return null;
    }
    if (email.trim() === '') {
      return 'Email is required';
    }
    return 'Please enter a valid email';
  };

  const isEnabled =
    fname.length > 0 &&
    lname.length > 0 &&
    email.length > 0 &&
    phone.length > 0 &&
    postal.length > 0;

  const validate = {
    firstName: name => nameValidation('First Name', name),
    lastName: name => nameValidation('Last Name', name),
    email: emailValidation,
  };

  return (
    <form action="https://nottinghilltowns.us18.list-manage.com/subscribe/post?u=839fb24cef0413753d27dbc3a&amp;id=8b8f942075" method="post" name="mc-embedded-subscribe-form" noValidate id="reg-form" className="reg-form">
      <div className="form-column">
        <div className="form-field">
          <input
            type="text"
            value={fname}
            name="FNAME"
            className=""
            id="mce-FNAME"
            placeholder="First name"
            onChange={(e) => { setFname(e.target.value) }}
            required={true}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            value={lname}
            name="LNAME"
            className=""
            id="mce-LNAME"
            placeholder="Last name"
            onChange={(e) => { setLname(e.target.value) }}
            required={true}
          />
        </div>
        <div className="form-field">
          <input
            type="email"
            value={email}
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            placeholder="Email"
            onChange={(e) => { setEmail(e.target.value) }}
            required={true}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="PHONE"
            className=""
            value={phone}
            id="mce-PHONE"
            placeholder="Phone"
            onChange={(e) => { setPhone(e.target.value) }}
            required={true}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            value={postal}
            name="POSTAL"
            className=""
            id="mce-POSTAL"
            placeholder="Postal"
            onChange={(e) => { setPostal(e.target.value) }}
            required={true}
          />
        </div>
      </div>

      <div className="form-column">
        <div className="form-field">
          <select
            name="HOWDIDU"
            className=""
            id="mce-HOWDIDU"
            value={HOWDIDU}
            onChange={(e) => { setHOWDIDU(e.target.value) }}
            required={true}
          >
            <option value="">How did you hear about us?</option>
            <option value="Google Search">Google Search</option>
            <option value="Newspaper">Newspaper</option>
            <option value="TV">TV</option>
            <option value="Magazine">Magazine</option>
          </select>
        </div>
        <div className="form-field">
          <select
            name="PRICER"
            className=""
            id="mce-PRICER"
            value={PRICER}
            onChange={(e) => { setPRICER(e.target.value) }}
            required={true}
          >
            <option value="">What's your desired price range?</option>
            <option value="$100,000-200,000">$100,000-200,000</option>
            <option value="$200,000-300,000">$200,000-300,000</option>
            <option value="$300,000-400,000">$300,000-400,000</option>
          </select>
        </div>
        <div className="form-field">
          <select
            name="AREUREALTO"
            className=""
            id="mce-AREUREALTO"
            value={AREUREALTO}
            onChange={(e) => { setAREUREALTO(e.target.value) }}
            required={true}
          >
            <option value="">Are you a realtor?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-field">
          <select
            name="WORKREALTR"
            className=""
            id="mce-WORKREALTR"
            value={WORKREALTR}
            onChange={(e) => { setWORKREALTR(e.target.value) }}
            required={true}
          >
            <option value="">Are you working with a realtor?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="form-column">
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
        <input
          type="hidden"
          name="b_839fb24cef0413753d27dbc3a_8b8f942075"
          tabIndex="-1"
        />
        <div className="form-submit">
          <Button
            variant="primary"
            type="submit"
            className="btn-reg"
            name="subscribe"
            id="mc-embedded-subscribe"
            disabled={!isEnabled}
            aria-label={!isEnabled ? "Ensure form fields are entered" : "Click to submit form"}
          >
            {!isEnabled ? "Ensure all fields are entered" : "Register Now"}
          </Button>
        </div>
      </div>
    </form>
  )
}
