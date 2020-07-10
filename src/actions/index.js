export const addKeg = (keg) => {
  const { name, brewery, description, abv, price, quantity, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brewery: brewery,
    description: description,
    abv: abv,
    price: price,
    quantity: quantity,
    id: id
  }
}
export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});