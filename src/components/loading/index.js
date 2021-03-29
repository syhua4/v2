import React, { memo } from "react";
import { LoadingWrapper } from "./style";
import { ReactComponent as LoadingSvg } from "@/assets/images/loading.svg";

export default memo(function Loading() {
  return (
    <LoadingWrapper>
      <LoadingSvg />
    </LoadingWrapper>
  );
});
