import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin-left: 50px;
  min-height: 100vh;
  .row {
    height: 100vh;
    h2 {
      text-transform: uppercase;
      margin: 30px 0;
      font-weight: 700;
      font-size: 32px;
    }
    .about-content {
      padding-right: 50px;

      > div {
        font-size: 20px;
        margin-bottom: 20px;
        &:last-of-type {
          margin-top: 20px;
        }
        span {
          font-weight: 700;
        }
      }
      ul {
        position: relative;
        list-style: none;
        margin-left: 0;
        padding-left: 1.2em;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
          display: flex;
          align-items: center;
          svg {
            margin-right: 10px;
            color: var(--primary);
          }
        }
      }
      .future svg {
        color: var(--gradient3);
      }
    }
    .about-animation {
      padding: 0;
      .coffee {
        width: 90%;
        display: block;
      }
    }
  }
`;
