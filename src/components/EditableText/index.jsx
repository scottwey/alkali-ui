import Text from "~/components/Text";
import editableMixin, { width } from "~/mixins/editable";

const EditableText = Text.extend`
  ${editableMixin} ${width};
`.withComponent("input");

EditableText.displayName = "Text(Editable)";

export default EditableText;
