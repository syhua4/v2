import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  margin-left: 50px;
  h2 {
    width: 80%;
    font-family: "Quicksand", serif;
    font-size: 40px;
    font-weight: 400;
    margin: 30px 0;
    line-height: 1.6;
    span {
      font-size: 40px;
    }
    em {
      font-family: "Quicksand", serif;
      font-style: normal;
      font-weight: 700;
      color: var(--primary);
    }
    @media (max-width: 768px) {
      font-size: 24px;
      span {
        font-size: 24px;
      }
    }
  }
  .intro {
    height: 200px;
    margin-bottom: 50px;
    margin-top: 0;
  }

  img {
    width: 300px;
    height: 360px;
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 5px;
    right: 5px;
  }
  @media (max-width: 576px) {
    img {
      display: none;
    }
  } ;
`;
