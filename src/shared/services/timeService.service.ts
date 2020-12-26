import { format } from "date-fns";

export const TimeService = {
  toFullDate: (date: string | Date) =>
    format(new Date(date), "HH:mm dd-MM-yyyy"),
};
