import createWrapperProxy from "react-cosmos-wrapper-proxy";
import { ThemeProvider } from "styled-components";
import createTheme from "./src/createTheme";

const themeProxy = createWrapperProxy({
  // Required
  component: ThemeProvider, // The wrapper component
  fixtureKey: "themed", // Used for toggling (or passing props)

  // Optional
  // Props to pass to the wrapper component
  props: {
    theme: createTheme()
  }
});

export default [themeProxy];
