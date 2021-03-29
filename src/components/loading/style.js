import styled from "styled-components";

export const LoadingWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;
