import styles from "./loader.scss"

export const Loader = () => {
    return `
        <div class="${styles.loader}">
            <div></div>
            <div></div>
            <div></div>
        </div>
    `
}