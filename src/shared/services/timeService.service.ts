import { format, formatISO } from "date-fns";

export const TimeService = {
  toFullDate: (date: string | Date) =>
    format(new Date(date), "HH:mm dd-MM-yyyy"),
  now: () => new Date(),
  toDatePickerFormat: (date: string | Date) =>
    format(new Date(date), "yyy-MM-dd"),
  toIsoDate: (date: string | Date) => formatISO(new Date(date)),
};
