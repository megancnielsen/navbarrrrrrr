import React from 'react';
import './App.css';
import NavbarComp from './components/Navbar';
import FormWrapperComp from './components/FormWrapper';
import Wrapper from './components/Wrapper';

function App() {
      return (
          <Wrapper>
              <NavbarComp />
              <FormWrapperComp />
          </Wrapper>
      );
  }    

export default App;
