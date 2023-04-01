import styles from "./ratingStars.scss"

export const RatingStars = (value: number, max: number = 5) => {
if(value === undefined) {
    return
}
    const percentage = Math.round((value / max) * 100);
    const ratingStars = Array.from(Array(max)).map(() => (
        `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" title="star">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#F2C94C"/>
        </svg>`
      )).join("");

    return `<div class="${styles.starContainer}">${ratingStars}
    <div class=${styles.overlay} style="width:${100 - percentage}%"></div>
</div>`
}