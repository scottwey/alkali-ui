import Title from "~/components/Title";
import editableMixin, { width } from "~/mixins/editable";

const EditableTitle = Title.extend`
  ${editableMixin} ${width};
`.withComponent("input");

EditableTitle.displayName = "Title(Editable)";

export default EditableTitle;
