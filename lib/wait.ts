export function wait(value: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve(true);
        return true;
      }, value);
    } else reject(false);
  });
}
