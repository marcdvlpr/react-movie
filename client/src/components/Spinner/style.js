import styled from 'styled-components';

export const StyledSpinner = styled.div`
  border: 5px solid rgb(243, 243, 243); /* Light grey */
  border-top: 5px solid rgb(251, 197, 0); /* Yellow */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 2vh auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
