import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const KegHeader = styled.h1`
  color: white;
  text-align: center;
`;

const Button = styled.button`
  background-color:#95a2b3;
	border-radius:28px;
	border:1px solid #343d35;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
`

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingBuy, onClickingReplace } = props;
  return (
    <React.Fragment>
      <KegHeader>Keg Detail</KegHeader>
      <h3>Name: {keg.name}</h3>
      <h3>Brewery: {keg.brewery}</h3>
      <h3>Description: {keg.description}</h3>
      <h3>ABV: {keg.abv}</h3>
      <h3>${keg.price}</h3>
      <h3>Pints Remaining: {keg.quantity}</h3>
      <Button onClick = {props.onClickingEdit}>Update Keg Info</Button>
      <Button onClick = {() => onClickingDelete(keg.id)}>Remove Keg</Button>
      <Button onClick = {() => onClickingBuy(keg)}>Pour Pint</Button>
      <Button onClick = {() => onClickingReplace(keg)}>Replace Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingReplace: PropTypes.func
};

export default KegDetail;