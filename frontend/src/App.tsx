import React from 'react';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './app/containers/HomePage';
import { ChooseStore } from './app/containers/BookingProcess/choosestore';

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choosestore" element={<ChooseStore />} />
        </Routes>
      </AppContainer>
    </Router>
    
  );
}

export default App;
