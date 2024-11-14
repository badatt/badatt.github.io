import styled from 'styled-components';

export const ListContainer = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;

  > ul li {
    position: relative;
    list-style-type: none;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }

  > ul li:before {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    width: 5px;
    height: 11px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    border-color: #4fd1c5;
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
`;
