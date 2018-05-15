import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export { default as Button } from "components/Button";
export { default as Card } from "components/Card";
export { default as Text } from "components/Text";
export { default as Title } from "components/Title";

const AlkaliProvider = ({ children, colors, ...rest }) => {
  const mergedColors = { ...theme.colors, ...colors };
  const mergedTheme = { ...theme, colors: mergedColors };

  return (
    <ThemeProvider {...rest} theme={mergedTheme}>
      {children}
    </ThemeProvider>
  );
};

export default AlkaliProvider;
