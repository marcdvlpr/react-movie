import React from 'react';
import { Link } from '@reach/router';
import { Container, Heading, Text } from './styles';
import { BackButton } from '../../components/Button';

const NotFound = () => {
  return (
    <Container>
      <Heading>404 - Page Not Found</Heading>
      <Text>Sorry, the page you are looking for does not exist.</Text>
      <Link to={'/'}>
        <BackButton title='Go back to home page' />
      </Link>
    </Container>
  );
};

export default NotFound;
