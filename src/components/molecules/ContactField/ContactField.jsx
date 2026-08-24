import PropTypes from "prop-types";
import { Field, Label, Input, TextArea, ErrorText } from "./ContactField.styles";

/**
 * @component ContactField
 * @description Controlled form field (input or textarea) with a label and
 * an optional error message.
 *
 * @prop {'input'|'email'|'textarea'} [as='input'] - Field type to render.
 * @prop {string} label - Field label.
 * @prop {string} name - Field `name`/`id`, also used as the `htmlFor` target.
 * @prop {string} value - Controlled field value.
 * @prop {React.ChangeEventHandler} onChange - Change handler.
 * @prop {string} [error] - Error message shown below the field.
 * @prop {boolean} [required=true] - Native `required` attribute.
 * @prop {number} [rows=5] - Number of rows, only used when `as="textarea"`.
 */
const ContactField = ({ as = "input", label, name, value, onChange, error, required = true, rows = 5 }) => {
  const Control = as === "textarea" ? TextArea : Input;

  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Control
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === "textarea" ? rows : undefined}
        type={as === "textarea" ? undefined : as === "email" ? "email" : "text"}
        $hasError={Boolean(error)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Field>
  );
};

ContactField.propTypes = {
  as: PropTypes.oneOf(["input", "email", "textarea"]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

export default ContactField;
