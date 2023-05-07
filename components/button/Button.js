import styles from "./Button.module.css";
export default function Button({ children, variant }) {
  return <button className={`${styles[variant]}`}>{children}</button>;
}
