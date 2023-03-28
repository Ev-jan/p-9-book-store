
import styles from "./button.scss"
export const Button = (text: string): string => {
  return `<button class="${styles.btn}">
${text}
</button>`;
};
