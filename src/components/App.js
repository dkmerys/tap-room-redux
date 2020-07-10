import React from 'react';
import Header from "./Header"
import KegControl from './KegControl';


function App() {
  const appStyles = {
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #274060 74%)'
  }
  return (
    <div style={appStyles}>
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
    </div>
  );
}


export default App;