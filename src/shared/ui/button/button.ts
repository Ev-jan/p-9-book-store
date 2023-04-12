
import styles from "./button.scss"
export const Button = (text: string, id?: string, modifClass?: string): string => {
  const button = document.createElement("button");
  button.className = styles.btn;
  button.textContent = text;
  if(id){
    button.id = id
  }
  if(modifClass){
    button.classList.add(`${modifClass}`)
  }
  return button.outerHTML;
};
