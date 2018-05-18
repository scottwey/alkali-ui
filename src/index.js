import React from "react";
import { ThemeProvider } from "styled-components";
import createTheme from "./createTheme";

export { default as Button } from "~/components/Button";
export { default as Card } from "~/components/Card";
export { default as Text } from "~/components/Text";
export { default as Title } from "~/components/Title";

const AlkaliProvider = ({
  children,
  colors,
  globalCss,
  globals,
  readabilityTransform,
  hoverTransform,
  ...rest
}) => {
  const theme = createTheme({ colors, globalCss, globals });

  return (
    <ThemeProvider {...rest} theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default AlkaliProvider;
