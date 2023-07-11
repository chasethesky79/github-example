import React from 'react';
import logo from '../logo.svg'
import Header from '../components/header/header'
import Profile from '../containers/Profile'
import styled from 'styled-components'

const AppWrapper = styled.div`
  text-align: center;
`
function App() {
  return (
    <AppWrapper>
      <Header logo={logo}/>
      <Profile/>
    </AppWrapper>
  );
}

export default App;
