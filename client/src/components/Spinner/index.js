import React from 'react';
import { SpinnerContainer, SpinnerWrapper, SpinnerImage, SpinnerBorder } from './style';
import RMLogo from '../../images/rm_logo2.png';

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerWrapper>
        <SpinnerImage src={RMLogo} alt='reactmovie-logo' />
        <SpinnerBorder />
      </SpinnerWrapper>
    </SpinnerContainer>
  );
};
