import React, { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import HamburgMenu from 'common/components/HamburgMenu';
import Container from 'common/components/UI/Container';
import { DrawerContext } from 'common/contexts/DrawerContext';

import { MENU_ITEMS } from 'common/data/Crypto';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';

import LogoImage from 'common/assets/image/saasModern/logo-white.png';
import LogoImageAlt from 'common/assets/image/saasModern/logo.png';
import Heading from '../../../common/components/Heading';
import { closeModal, openModal } from '@redq/reuse-modal';
import LoginModal from '../../Agency/LoginModal';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  // Default close button for modal
  const CloseModalButton = () => (
    <Button
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  // Alt close button for modal
  const CloseModalButtonAlt = () => (
    <Button
      className="modalCloseBtn alt"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <Heading
            as="h3"
            color="white"
            content="NFT-CN"
            logoStyle={logoStyle}
          />
          {/*<Logo*/}
          {/*  href="#"*/}
          {/*  logoSrc={LogoImage}*/}
          {/*  title="Portfolio"*/}
          {/*  logoStyle={logoStyle}*/}
          {/*  className="main-logo"*/}
          {/*/>*/}
          {/*<Logo*/}
          {/*  href="#"*/}
          {/*  logoSrc={LogoImageAlt}*/}
          {/*  title="Portfolio"*/}
          {/*  logoStyle={logoStyle}*/}
          {/*  className="logo-alt"*/}
          {/*/>*/}
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            {/*<Link href="#">*/}
            <a className="navbar_button" style={{ marginRight: '40px' }}>
              <Button {...button} title="铸造NFT" onClick={handleLoginModal} />
            </a>
            <a className="navbar_button">
              <Button {...button} title="登录/注册" />
            </a>
            {/*</Link>*/}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <Link href="#">
                <a className="navbar_drawer_button">
                  <Button {...button} title="登录/注册" />
                </a>
              </Link>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
