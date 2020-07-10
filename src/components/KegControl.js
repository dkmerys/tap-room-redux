import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false
    };        
  }

  handleClick = () => {
    if (this.state.selectedKeg !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this. props;
    const { id, name, brewery, description, abv, price, quantity } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brewery: brewery,
      description: description,
      abv: abv,
      price: price,
      quantity: quantity
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brewery, description, abv, price, quantity } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brewery: brewery,
      description: description,
      abv: abv,
      price: price,
      quantity: quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleBuyingKeg = (id) => {
    const purchasedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    if (purchasedKeg.quantity > 0) {
      purchasedKeg.quantity -= 1
    }
    const editedKegList = this.state.kegList
                          .filter(keg => keg.id !== this.state.selectedKeg.id)
                          .concat(purchasedKeg);
    this.setState({
      kegList: editedKegList
    });
  }

  handleReplacingKeg = (id) => {
    const replacedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    replacedKeg.quantity = 124;
    const editedKegList = this.state.kegList
                          .filter(keg => keg.id !== this.state.selectedKeg.id)
                          .concat(replacedKeg);
    this.setState({
      kegList: editedKegList
    });
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
   
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm
                              keg = {this.state.selectedKeg}
                              onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List"
    } else if (this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail
                              keg = {this.state.selectedKeg}
                              onClickingDelete = {this.handleDeletingKeg}
                              onClickingEdit = {this.handleEditClick}
                              onClickingBuy = {this.handleBuyingKeg}
                              onClickingReplace = {this.handleReplacingKeg} />
      buttonText = "Return To Keg List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm
                              onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return To Keg List";
    } else {
      currentlyVisibleState = <KegList
                              kegList = {this.props.kegList}
                              onKegSelection = {this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  kegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    kegList: state.kegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;