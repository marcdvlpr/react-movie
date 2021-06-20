import styled from 'styled-components';

export const StyledHeroImage = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0, 0, 0, 0)
      39%,rgba(0, 0, 0, 0)
      41%,rgba(0, 0, 0, .65)
      100%
    ),
    url('${props.image}'), rgb(28, 28, 28)`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100vw;
  height: 80vh;
  position: relative;
  animation: animateHeroimage 1s;

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
`;


export const HeroText = styled.div`
  z-index: 100;
  max-width: 45rem;
  position: absolute;
  bottom: 1rem;
  margin-right: 2rem;
  min-height: 5rem;
  background-color: rgba(0, 0, 0, 0);
  color: var(---white);

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--white);

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.3rem;
  color: var(--white);
  letter-spacing: 0.02rem;

  @media screen and (max-width: 720px) {
    font-size: 1rem;
    line-height: 1.1rem;
  }
`;
