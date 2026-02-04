import FormItem from "./FormItem";
import FormStyles from "./FormItem.module.css";


export default function FormInput({label, id, name, value, onChange, disabled, type="text"}) {
  return (
    <FormItem label={label}>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        className={FormStyles.textBox}
      />
    </FormItem>

  );
}
