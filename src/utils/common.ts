export const slowDown = async (duration: number = 1000) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, duration);
  });
};
