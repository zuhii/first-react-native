import React, { useState } from 'react';
import styled from 'styled-components/native';
import Dog from './components/Dog';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Dog />
    </Container>
  );
};

export default App;
