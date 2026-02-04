import FormItem from "./FormItem";
import FormStyles from "./FormItem.module.css";

export default function FormTextArea({label, id, name, value, cols, rows, onChange}) {

  return (
    <FormItem label={label} htmlFor={id}>
      <textarea
        id={id}
        name={name}
        value={value}
        cols={cols}
        rows={rows}
        onChange={onChange}
        className={FormStyles.textBox}
      />
    </FormItem>
  );
}
