export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const minutes = hours % 60;
  return `${hours}h ${minutes}m`
};
