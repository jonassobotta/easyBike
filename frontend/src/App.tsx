import React from 'react';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './app/containers/HomePage';
import { ChooseStore } from './app/containers/BookingProcess/choosestore';
import { PickUpDate } from './app/containers/BookingProcess/pickup';
import { BookBike } from './app/containers/BookingProcess/bookbike';
import { Confirmation } from './app/containers/BookingProcess/confirmation';

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
          <Route path="/booking-process/choose-store" element={<ChooseStore />} />
          <Route path="/booking-process/pick-up-date" element={<PickUpDate />} />
          <Route path="/booking-process/book-bike" element={<BookBike />} />
          <Route path="/booking-process/confirmation" element={<Confirmation />} />
        </Routes>
      </AppContainer>
    </Router>
    
  );
}

export default App;
