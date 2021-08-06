import { format, parse } from 'date-format-parse';

export const parseDate = (item) => {
  const d = parse(item, 'YYYY-MM-DDTHH:mm:ss');

  return format(d, 'DD/MM/YYYY');
};

export const parseDateAndTime = (item) => {
  const d = parse(item, 'YYYY-MM-DDTHH:mm:ss');

  return format(d, 'DD/MM/YYYY hh:mm:ss');
};