export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`
};

export const calcDate = date => {
  const newDate = new Date(date);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(newDate);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(newDate);

  return `${day} ${month} ${year}`;
};

export const titleToRoute = title => {
  const route = title.split(' ').join('-').toLowerCase();

  return route;
}
