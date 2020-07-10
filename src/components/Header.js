import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.h1`
  color: white;
`;

function Header() {
  return (
    <React.Fragment>
      <MainHeader>Growlers Taproom</MainHeader>
      <h3 className="mainSubheader">Keg Management Interface</h3>
    </React.Fragment>
  );
}

export default Header;