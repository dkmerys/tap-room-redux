import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props) {
  return(
    <React.Fragment>
      {Object.values(props.kegList).map((keg) => {
        return <Keg
          whenKegClicked = {props.onKegSelection}
          name={keg.name}
          brewery={keg.brewery}
          description={keg.description}
          abv={keg.abv}
          price={keg.price}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.id} />
        })}
    </React.Fragment>
  );
}

KegList.propTypes ={
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
}

export default KegList;