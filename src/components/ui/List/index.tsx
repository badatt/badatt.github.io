import React from 'react';

import * as Styled from './styles';

interface Props {
  items: [string];
}

const List: React.FC<Props & React.HtmlHTMLAttributes<HTMLDivElement>> = ({ items }) => (
  <Styled.ListContainer className="styled-list">
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </Styled.ListContainer>
);

export default List;
