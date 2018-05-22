import Text from "~/components/Text";
import borderStyles from "~/styles/border";

const Title = Text.extend`
  ${borderStyles};
`;

Title.defaultProps = {
  fontWeight: 400,
  fontSize: 5,
  border: false,
  fontStyle: "normal",
  letterSpacing: 2,
  serif: true
};

Title.displayName = "Title";

export default Title;
