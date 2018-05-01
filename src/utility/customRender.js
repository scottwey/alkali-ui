import React from "react";

const whitelist = ["div", "span"];

const customRender = element => {
  if (!element || element === null) {
    return false;
  }

  if (element instanceof String || typeof element === "string") {
    return element;
  }

  if (Array.isArray(element)) {
    const elements = element;
    return elements.map(e => customRender(e));
  }

  const { style, children, tag } = element;
  if (whitelist.includes(tag)) {
    const Tag = tag;
    return <Tag style={style}>{customRender(children)}</Tag>;
  } else {
    return null;
  }
};

export default customRender;
