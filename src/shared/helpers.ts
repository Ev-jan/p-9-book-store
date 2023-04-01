export const createList = (listClass?: string, ...elements: string[]): string => {
    const items = elements.map((element) => `<li>${element}</li>`);
    return `<ul class="${listClass}">${items.join('')}</ul>`;
  };
  