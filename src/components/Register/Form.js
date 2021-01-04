import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import useForm from "./useForm";
import validate from './Validation';

const Form = () => {
  const [HOWDIDU, setHOWDIDU] = useState(false);
  const [PRICER, setPRICER] = useState(false);
  const [AREUREALTO, setAREUREALTO] = useState(false);
  const [WORKREALTR, setWORKREALTR] = useState(false);
  const [checked, setChecked] = useState(true);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(register, validate);

  function register() {
    console.log('No errors, submit callback called!');
  }

  return (
    <form
      action="https://nottinghilltowns.us18.list-manage.com/subscribe/post?u=839fb24cef0413753d27dbc3a&amp;id=8b8f942075"
      method="post"
      name="mc-embedded-subscribe-form"
      id="reg-form"
      className="reg-form"
      onSubmit={handleSubmit}>
      <div className="form-column">
        <div className="form-field">
          <input
            type="text"
            name="FNAME"
            className={`input ${errors.FNAME && 'is-danger'}`}
            id="mce-FNAME"
            placeholder="First name"
            onChange={handleChange} value={values.FNAME || ''}
            required
          />
          {errors.FNAME && (
            <p className="help is-danger">{errors.FNAME}</p>
          )}
        </div>
        <div className="form-field">
          <input
            type="text"
            name="LNAME"
            className={`input ${errors.LNAME && 'is-danger'}`}
            id="mce-LNAME"
            placeholder="Last name"
            onChange={handleChange} value={values.LNAME || ''}
            required
          />
          {errors.LNAME && (
            <p className="help is-danger">{errors.LNAME}</p>
          )}
        </div>
        <div className="form-field">
          <input
            type="email"
            name="EMAIL"
            className={`input email ${errors.EMAIL && 'is-danger'}`}
            id="mce-EMAIL"
            placeholder="Email"
            onChange={handleChange} value={values.EMAIL || ''}
            required
          />
          {errors.EMAIL && (
            <p className="help is-danger">{errors.EMAIL}</p>
          )}
        </div>
        <div className="form-field">
          <input
            type="text"
            name="PHONE"
            className={`input ${errors.PHONE && 'is-danger'}`}
            id="mce-PHONE"
            placeholder="Phone"
            onChange={handleChange} value={values.PHONE || ''}
            required
          />
          {errors.PHONE && (
            <p className="help is-danger">{errors.PHONE}</p>
          )}
        </div>
        <div className="form-field">
          <input
            type="text"
            name="POSTAL"
            className={`input ${errors.POSTAL && 'is-danger'}`}
            id="mce-POSTAL"
            placeholder="Postal"
            onChange={handleChange} value={values.POSTAL || ''}
            required
          />
          {errors.POSTAL && (
            <p className="help is-danger">{errors.POSTAL}</p>
          )}
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
            required
          >
            <option value="" defaultValue="">How did you hear about us?</option>
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
            required
          >
            <option value="" defaultValue="">What's your desired price range?</option>
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
            required
          >
            <option value="" defaultValue="">Are you a realtor?</option>
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
            required
          >
            <option value="" defaultValue="">Are you working with a realtor?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-field consent-field">
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                checked={checked}
                onChange={() => setChecked(!checked)}
                required />By checking this, you agree to receive emails from Gable View Homes, its affiliates and agents, with pricing, floor plans, and site updates.</label>

            {!checked && (
              <p className="help is-danger">Consent is required</p>
            )}
          </div>
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
            aria-label={errors ? "Ensure form fields are entered" : "Click to submit form"}
          >
            Register Now
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
