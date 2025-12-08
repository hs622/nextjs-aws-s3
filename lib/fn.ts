


export const getRandomValues = (min: number, max: number): number => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (minimum - maximum + 1)) + minimum;
}

