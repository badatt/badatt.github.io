import styled from 'styled-components';

export const ListContainer = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  font-size: small;
  font-weight: bold;

  > ul {
    display: flex;
    flex-wrap: wrap;
  }

  > ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0.125rem 0;
  }

  > ul li:first-child:before {
    content: '';
    margin-left: 0.5rem;
  }

  > ul li:not(:first-child):before {
    content: '';
    width: 5px;
    height: 5px;
    margin: 0 0.5rem;
    border-radius: 50%;
    background-color: #5a67d8;
  }
`;
