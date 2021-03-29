import styled from "styled-components";

export const ButtonWrapper = styled.div`
  font-size: 16px !important;
  display: inline-block;
  width: ${(props) => props.width || "135px"};
  font-weight: 700;
  padding: 5px 10px;
  text-transform: uppercase;
  border: 2px solid;
  border-image: linear-gradient(
    135deg,
    var(--gradient1),
    var(--gradient2)
  );
  border-image-slice: 1;
  background-image: linear-gradient(
    135deg,
    var(--gradient1),
    var(--gradient2)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: transparent;
    z-index: -1;
    transform: translate3d(-101%, 0, 0);
    transition: all 0.5s;
  }

  &::before {
    transform: translate3D(0, 0, 0);
    z-index: -2;
  }

  &:hover {
    color: #fff;
    &::after {
      background-image: linear-gradient(
        135deg,
        var(--gradient1),
        var(--gradient2)
      );
      transform: translate3D(0, 0, 0);
      transition: all 0.5s;
    }
  }
`;
