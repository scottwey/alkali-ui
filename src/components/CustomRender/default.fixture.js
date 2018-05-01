import CustomRender from "./index";

export default {
  component: CustomRender,
  themed: true,
  props: {
    element: {
      tag: "div",
      style: { fontWeight: "bold", fontSize: 30 },
      children: {
        tag: "div",
        style: { fontWeight: "normal" },
        children: {
          tag: "div",
          children: [
            "This is",
            {
              tag: "span",
              style: { fontStyle: "italic", fontWeight: "bold" },
              children: " more  "
            },
            "text."
          ]
        }
      }
    }
  }
};
