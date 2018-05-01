import { fontSize, fontWeight, fontStyle, letterSpacing } from "styled-system";
import { Flex } from "grid-styled";
import cardColors from "styles/card/colors";
import cardShadows from "styles/card/shadows";

const Card = Flex.extend`
  ${fontSize}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${cardColors}
  ${cardShadows}
  border-radius: 5px;
  max-width: 50rem;
  min-width: 35rem;
  font-style: ${({ fontStyle }) => fontStyle};
`;

Card.defaultProps = {
  cc: "light",
  fontWeight: 300,
  fontSize: 3,
  fontStyle: "normal",
  border: false,
  p: 4,
  flexDirection: "column"
};

Card.displayName = "Card";

export default Card;
