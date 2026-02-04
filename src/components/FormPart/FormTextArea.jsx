import FormItem from "./FormItem";
import FormStyles from "./FormItem.module.css";

export default function FormTextArea({label, id, name, value, rows = 8, disabled, onChange}) {

  return (
    <FormItem label={label} htmlFor={id}>
      <textarea
        id={id}
        name={name}
        value={value}
        rows={rows}
        onChange={onChange}
        disabled={disabled}
        className={FormStyles.textBox}
      />
    </FormItem>
  );
}
