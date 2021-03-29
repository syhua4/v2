import React, { memo } from "react";
import { ButtonWrapper } from "./style";

export default memo(function Button(props) {
  const {
    btnWidth,
    btnColor1,
    btnColor2,
    btnContent,
    toggleClick,
  } = props;
  return (
    <>
      <ButtonWrapper
        width={btnWidth}
        color1={btnColor1}
        color2={btnColor2}
        onClick={(e) => toggleClick(e)}
      >
        {btnContent}
      </ButtonWrapper>
    </>
  );
});
