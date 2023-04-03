// export const CreateList = (elements: string[], listClass?: string, ): string => {
//     const items = elements.map((element) => `<li>${element}</li>`);
//     return `<ul class="${listClass}">${items.join('')}</ul>`;
//   };
  

export function GenerateId(): string {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  let hex = "";
  for (let i = 0; i < array.length; i++) {
    hex += array[i].toString(16).padStart(2, "0");
  }
  return hex;
}