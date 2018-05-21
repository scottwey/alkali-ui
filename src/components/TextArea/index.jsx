import TextArea from "react-textarea-autosize";
import Input from "~/components/Input";

const StyledTextArea = Input.withComponent(TextArea);

StyledTextArea.displayName = "TextArea";

export default StyledTextArea;
