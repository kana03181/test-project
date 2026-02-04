
import FormStyles from "./FormItem.module.css";

export default function FormLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className={FormStyles.name}>{children}</label>
  );
}
