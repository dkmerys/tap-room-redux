import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions'

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
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this. props;
    const action = a.addKeg(newKeg)
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
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
    const action = a.addKeg(kegToEdit)
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleBuyingKeg = (beerToBuy) => {
    const { dispatch } = this.props;
    const action = a.buyPint(beerToBuy);
    dispatch(action)
    this.setState({selectedKeg: null})
  }

  handleReplacingKeg = (kegToReplace) => {
    const { dispatch } = this.props;
    const action = a.replaceKeg(kegToReplace)
    dispatch(action)
    this.setState({selectedKeg: null})
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