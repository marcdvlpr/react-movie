import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: var(--secondaryColor);
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: var(--lightGrey);
  margin-bottom: 2rem;
`;
