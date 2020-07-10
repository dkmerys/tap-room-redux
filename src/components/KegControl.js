import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
      kegList: [
        {
          name: 'Hayduke Helles',
          brewery: 'Crux',
          description: 'Bright as a desert sunrise and crisp as it is uncompromising, this helles lager balances a slightly sweet malt body with a generous dose of whole leaf crystal and fuggle hops for a satisfactory sip that’s worth fighting for.',
          abv: '5.5%',
          price: '4',
          quantity: 118,
          id: "0"
        },
        {
          name: '3-Way IPA',
          brewery: 'Fort George',
          description: 'Built on a structurally sound foundation of pilsner malt, spelt, and flaked oats, and dry-hopped with ridiculous levels of Simcoe, Azacca, Citra, and Chinook hops, this juicy beast is coming to crush your summer. 3-Way IPA has enough tropical fruit flavors to satiate a giant lizard, playing on pleasant notes of melon & fresh orange peel, and a soft finishing touch, like a gorilla on the bongos.',
          abv: '7.2%',
          price: '6',
          quantity: 65,
          id: "1"
        },
        {
          name: 'Sassy Pony Pale',
          brewery: 'Gigantic',
          description: 'Frisky and hop forward, Sassy Pony is a juicy pale that pleases those looking for something a little lighter than an IPA, but still desiring a citrusy/fruity/sassy hop kick.',
          abv: '5.5%',
          price: '4',
          quantity: 104,
          id: "2"
        },
        {
          name: 'Hazy... So Hot Right Now',
          brewery: 'StormBreaker',
          description: 'Features additions of 18 lbs of Mosaic in the whirlpool, another 18 at Dry Hop, producing intense, Blue Steel, Le Tigre-like aromas of citrus and tropical fruits.',
          abv: '5.6%',
          price: '5',
          quantity: 120,
          id: "3"
        },
        {
          name: 'Gloria!',
          brewery: 'Block15',
          description: 'Blending delicate malt character and zesty hops, Gloria! is our vision of the crisp, unfiltered pilsner. Brewed with floor-malted pilsner malts, Gloria! pours a hazy, straw-colored pint. European and Oregon-grown hops impart citrus and floral spice, while select lager yeast finishes clean and refreshing. This immensely drinkable lager is our brewers’ choice after a long day in the brewhouse. Gloria!',
          abv: '5%',
          price: '4.50',
          quantity: 87,
          id: "4"
        }
      ]
    }
  };

  handleClick = () => {
    if (this.state.selectedKeg !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({kegList: newKegList,
                  formVisibleOnPage: false})
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newKegList = this.state.kegList.filter(keg => keg.id !== id);
    this.setState({
      kegList: newKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedKegList = this.state.kegList
                          .filter(keg => keg.id !== this.state.selectedKeg.id)
                          .concat(kegToEdit);
    this.setState({
      kegList: editedKegList,
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm
                              onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return To Keg List";
    } else {
      currentlyVisibleState = <KegList
                              kegList = {this.state.kegList}
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

export default KegControl;