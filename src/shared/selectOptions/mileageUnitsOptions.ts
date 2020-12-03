import { MileageUnit } from "../enums";
import { SelectOption } from "../types";

export const mileageUnitsOptions: SelectOption[] = [
  {
    label: "km",
    value: MileageUnit.Km,
  },
  {
    label: "mil",
    value: MileageUnit.Mil,
  },
];
