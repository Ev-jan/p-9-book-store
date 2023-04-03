
import styles from "./button.scss"
export const Button = (text: string, id?: string): string => {
  const button = document.createElement("button");
  button.className = styles.btn;
  button.textContent = text;
  if(id){
    button.id = id
  }
  return button.outerHTML;
};
