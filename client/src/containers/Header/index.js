import React from 'react';
import { Link } from '@reach/router';
import { StyledHeader, NavHeader, NavLeft, NavRight, Title } from './style';
import Modal from '../Modal';
import { Logo } from '../../components/Logo';
import { LoginButton } from '../../components/Button';
import { useModal } from '../../hooks/useModal';
import RMLogo from '../../images/rm_logo2.png';

const Header = () => {
  const [isShowing, toggle] = useModal();

  return (
    <>
      <StyledHeader>
        <NavHeader>
          <NavLeft>
            <Link to={'/'}>
              <Logo image={RMLogo} alt='reactmovie-logo' />
            </Link>
            <Title>React Movie</Title>
          </NavLeft>

          <NavRight>
            <LoginButton onClick={toggle}>Sign In</LoginButton>
          </NavRight>
        </NavHeader>
      </StyledHeader>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        title='React Movie Account'
      >
        MODAL
      </Modal>
    </>
  );
};

export default Header;
