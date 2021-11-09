import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Title = styled.p`
  font-size: 2.3em;
  font-weight: 600;
  margin-bottom: 30px;
`;
const Movies = styled.p``;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Movies>{children}</Movies>
  </Container>
);

Section.propTypes = {
  tilte: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
