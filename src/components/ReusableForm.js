import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type="text"
          name="name"
          placeholder="Beer Name"/>
        <br />
        <input
          type="text"
          name="brewery"
          placeholder="Brewery"/>
          <br />
        <textarea
          type="text"
          name="description"
          placeholder="Beer Description"/>
        <br />
        <input
          type="text"
          name="abv"
          placeholder="Alcohol by Volume"/>
        <br />
        <input
          type="text"
          name="price"
          placeholder="Price per Pint"/>
        <input
          type="number"
          name="quantity"
          placeholder="Pints Remaining in Keg"/>
        <br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;