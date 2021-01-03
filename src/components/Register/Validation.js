export default function Validation(values) {
  let errors = {};
  if (!values.EMAIL) {
    errors.EMAIL = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.EMAIL)) {
    errors.EMAIL = 'Email address is invalid';
  }
  if (!values.FNAME) {
    errors.FNAME = 'This field is required';
  }
  if (!values.LNAME) {
    errors.LNAME = 'This field is required';
  }
  if (!values.PHONE) {
    errors.PHONE = 'This field is required';
  }
  if (!values.POSTAL) {
    errors.POSTAL = 'This field is required';
  }
  return errors;
};
