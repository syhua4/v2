import styled from "styled-components";

export const SideNavWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0;
  box-shadow: 0px 1px 10px rgba(153, 153, 153, 0.3);
  .side-nav {
    height: 100%;
    width: 100%;
    flex-grow: 1;
  }
  .nav-brand {
    font-size: 0;
    padding-top: 2.5rem;
    z-index: 1;

    .nav-brand-img {
      width: 100px;
      height: 60px;
      display: block;
      background: url(${require(`@/assets/images/logo.png`).default})
        no-repeat;
      background-size: contain;
      margin: 0 auto;
    }
  }
  .sidebar {
    height: 200px;
    width: 100%;
    padding: 0;
    text-transform: uppercase;
    .nav-item {
      margin: 5px 0;
      text-align: center;
      position: relative;
      width: 100%;
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 40px;
        background-color: rgba(90, 185, 234, 0.3);
        top: 0;
        transform: translate3d(-101%, 0, 0);
        transition: all 0.5s;
        z-index: -1;
      }
      &:hover::after {
        transform: translate3D(0, 0, 0);
        transition: all 0.5s;
      }
      .nav-link {
        color: #333;
      }
      .active {
        background-color: var(--primary);
        color: #fff;
      }
    }
  }
  .footer {
    width: 100%;
    text-align: center;
    padding-left: 10px;
    .social-links {
      margin-bottom: 10px;
      span {
        cursor: pointer;
        margin: 0 2px;
        svg {
          font-size: 24px;
          color: var(--primary);
          transition: all 0.5s;
          &:hover {
            color: var(--gradient2);
          }
        }
      }
    }
    p {
      font-size: 12px;
      line-height: 1;
    }
  }
  .nav-collapse {
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: var(--primary);
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 1000;
    cursor: pointer;
    display: none;
  }
  .nav-collapse svg {
    font-size: 33px;
    transform: translate3d(160%, 170%, 0);
    color: #fff;
  }

  .collaspse-menu {
    display: ${(props) => (props.showNav ? "block" : "none")};
    height: 100%;
    width: 100vw;
    background-color: #fff;
    position: relative;
    z-index: 999;
    .side-nav {
      display: flex;
      .nav-brand {
        padding-top: 20px;
      }
    }
  }
  @media (max-width: 768px) {
    box-shadow: none;
    .nav-collapse {
      display: block;
    }
  }
`;
