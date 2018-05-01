import React from "react";
import customRender from "../../utility/customRender";

const CustomRender = ({ element }) => {
  const contents = customRender(element);
  return <div>{customRender(element)}</div>;
};

export default CustomRender;
