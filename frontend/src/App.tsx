import React from 'react';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import { HomePage } from './app/containers/HomePage';

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
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
