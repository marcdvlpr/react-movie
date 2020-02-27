import React from 'react';
import { StyledHeroImage, HeroContent, HeroText, Title, Text } from './styles';

const HeroImage = ({ image, title, text}) => {
  return (
    <StyledHeroImage image={image}>
      <HeroContent>
        <HeroText>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </HeroText>
      </HeroContent>
    </StyledHeroImage>
  )
};

export default HeroImage;
