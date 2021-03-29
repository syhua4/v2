import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  margin-left: 50px;
  .header-underlined {
    margin-top: 50px;
  }
  .project.row {
    .col {
      padding: 0 !important;
    }
  }
  .project-info {
    h3 {
      font-weight: 700;
      font-size: 24px;
    }
    .tags {
      margin: 10px 0;
      font-size: 12px;
      span {
        margin: 0 5px 5px 0;
        display: inline-block;
        padding: 1px 8px;
        background-color: var(--gradient3);
        border-radius: 5px;
      }
    }
    .links {
      margin-top: 20px;
      display: flex;
    }
    a {
      margin-left: 20px;
      color: #333;
      display: inline-block;
      height: 38px;
      line-height: 38px;
      font-weight: 700;
      color: var(--gradient2);
      transition: all 0.3s;
      &:hover {
        text-decoration: none;
        color: var(--gradient1);
      }
    }
  }
  .project-img {
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
`;
