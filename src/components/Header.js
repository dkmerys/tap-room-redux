import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.h1`
  color: white;
  text-align: center;
`;

const SubHeader = styled.h3`
  color: white;
  text-align: center;
`;

function Header() {
  return (
    <React.Fragment>
      <MainHeader>Growlers Taproom</MainHeader>
      <SubHeader>Keg Management Interface</SubHeader>
    </React.Fragment>
  );
}

export default Header;