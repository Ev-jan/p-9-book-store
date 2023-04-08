import { ISlideImage } from "../../shared/interfaces";
import styles from "./slider.scss";

export class Slider {
  private slides: ISlideImage[] = [];
  private currentIndex: number = 0;
  private timerID: NodeJS.Timer | number | null = 0;
  private sliderContainerEl: HTMLDivElement | null = null;
  private slideShowContainerEl: HTMLImageElement | null = null;
  private slideShowControlsEl: HTMLDivElement | null = null;
  private dotIndicatorEls: HTMLDivElement[] | null = null;
  private slideShowInterval: number = 5000;

  constructor(slides: ISlideImage[]) {
    this.slides = slides;
  }

  public create = (slides: ISlideImage[]) => {
    const dots = slides
      .map((slide) => `<div class="${styles.dotIndicator}"></div>`)
      .join("");
    return `
    <div class="${styles.sliderContainer}">
    <img class="${styles.slideShowContainer}">
        <div class="${styles.slideShowControls}">
            ${dots}
        </div>
    </div>
    `;
  };

  public update() {
    // locate slider's elements rendered on page

    this.sliderContainerEl = document.querySelector(
      `.${styles.sliderContainer}`
    ) as HTMLDivElement;
    this.slideShowContainerEl = document.querySelector(
      `.${styles.slideShowContainer}`
    ) as HTMLImageElement;
    this.slideShowControlsEl = document.querySelector(
      `.${styles.dotIndicator}`
    ) as HTMLDivElement;
    this.dotIndicatorEls = Array.from(
      document.querySelectorAll(`.${styles.dotIndicator}`)
    ) as HTMLDivElement[];

    // add event listeners

    this.dotIndicatorEls.forEach((dot) => {
      dot.addEventListener("click", () => {
        this.currentIndex = this.dotIndicatorEls!.indexOf(dot);
        this.showSlide();
        this.currentIndex = this.dotIndicatorEls!.indexOf(dot) + 1;
      });
    });

    // show first slide

    this.showSlide();
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;

    const loop = () => {
      if(this.timerID) {
        clearTimeout(this.timerID);
      }
      if (this.currentIndex > this.slides.length - 1) {
        this.currentIndex = 0;
      }
      this.showSlide();
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.timerID = setTimeout(loop, this.slideShowInterval);
    };
      this.timerID = setTimeout(loop, this.slideShowInterval);


  }

  private showSlide() {
    if (this.slideShowContainerEl) {
      this.slideShowContainerEl.src = `${
        this.slides[this.currentIndex].url
      }`;
      this.slideShowContainerEl.alt = `${this.slides[this.currentIndex].alt}`

      this.dotIndicatorEls!.forEach((el, i) => {
        el.classList.toggle(
          styles.dotIndicator_active,
          i === this.currentIndex
        );
      });
    }
  }
}
