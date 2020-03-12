import React from 'react';
import PropTypes from 'prop-types';
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

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default HeroImage;
