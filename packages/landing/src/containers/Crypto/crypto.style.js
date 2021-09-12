import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Poppins', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
  }
  p{
    font-family: 'Poppins', sans-serif;
  }

  section {
    position: relative;
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #000;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: rgb(255,148,147);;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: rgb(255,148,147);
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: rgb(255,148,147);;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #6d4efe;
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;

    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;

      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;

        iframe {
          max-width: 700px !important;
          max-height: 380px !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 5px !important;
        }
      }
    }

    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }

    &.video-modal {
      background-color: transparent !important;
    }

    .innerRndComponent {
      padding-right: 0 !important;
    }
  }

  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .reuseModalHolder.login-modal{
    @media (min-width: 768px) {
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }

  .reuseModalHolder.search-modal{
    top: 0!important;
    left: 0!important;
    max-width: 100%!important;
    max-height: 100%!important;
    width: 100%;
    height: 100%;
  }

  .reuseModalHolder.login-modal .innerRndComponent{
    overflow-y: auto;
    margin-right: -30px;
    padding-right: 30px !important;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .saas_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
      .main_menu {
        li {
          a {
            color: #000;
            &:hover {
              color: rgb(255, 148, 147);
            }
          }
          &.is-current {
            a {
              color: rgb(255, 148, 147);
            }
          }
        }
      }
    }
    .hamburgMenu__bar {
      > span {
        background: #2aa275;
      }
    }
  }

  .saas_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .logo-alt {
      display: none;
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: rgb(255, 148, 147);
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          transition: 0.15s ease-in-out;
          &:hover {
            color: rgb(255, 148, 147);
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
      button {
        border-radius: 6px;
        background-image: -moz-linear-gradient(
          29deg,
          rgb(255, 148, 147) 0%,
          rgb(255, 120, 162) 100%
        );
        background-image: -webkit-linear-gradient(
          29deg,
          rgb(255, 148, 147) 0%,
          rgb(255, 120, 162) 100%
        );
        background-image: -ms-linear-gradient(
          29deg,
          rgb(255, 148, 147) 0%,
          rgb(255, 120, 162) 100%
        );
        &:hover {
          box-shadow: -6.691px 7.431px 20px 0px rgba(255, 131, 157, 0.2);
        }
        > span {
          font-weight: 700;
          letter-spacing: 1px;
        }
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }
`;
