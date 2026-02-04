import FormLabel from "./FormLabel";
import FormStyles from "./FormItem.module.css";

export default function FormItem({label, htmlFor, children}) {
  return (
    <div className={FormStyles.formItem}>
      <FormLabel htmlFor={htmlFor}>
        {label}
      </FormLabel>

      <div className={FormStyles.formControl}>
        {children}
      </div>
    </div>
  );
}
