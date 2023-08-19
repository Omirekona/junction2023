// [min, max]
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement(list: any[]) {
  return list[Math.floor(Math.random() * list.length)];
}
