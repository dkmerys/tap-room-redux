import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    if (event.target.name.value === "") {
      event.target.name.value = keg.name
    }
    if (event.target.brewery.value === "") {
      event.target.brewery.value = keg.brewery
    }
    if (event.target.description.value === "") {
      event.target.description.value = keg.description
    }
    if (event.target.abv.value === "") {
      event.target.abv.value = keg.abv
    }
    if (event.target.price.value === "") {
      event.target.price.value = keg.price
    }
    if (event.target.quantity.value === "") {
      event.target.quantity.value = keg.quantity
    }
    props.onEditKeg({
      name: event.target.name.value,
      brewery: event.target.brewery.value,
      description: event.target.description.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: keg.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;