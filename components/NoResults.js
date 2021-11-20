import React from 'react';
import styled from 'styled-components';

const NoResultsStyles = styled.div`
  background: #493843;
  color: white;
  text-align: center;
  vertical-align: middle;
  padding: 20px;

  p {
    margin: 0;
    padding: 0;
  }
`;

export default function NoResults() {
  return (
    <NoResultsStyles>
      <p>No Results</p>
    </NoResultsStyles>
  );
}
