import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Details = styled.main`
  ${tw`p-1`};
`;

export const Images = styled.figure`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    width: 16rem;
    height: 28rem;
  }
`;
