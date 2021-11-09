import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Load = styled.h1`
  font-size: 3em;
  color: 'transparent';
`;

const Loader = () => (
  <Container>
    <Load>Loading...</Load>
  </Container>
);

export default Loader;
