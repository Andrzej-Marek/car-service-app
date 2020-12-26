import * as Yup from "yup";
import { globalTranslation } from "./globalTranslation.util";

const translatePrefix = "validation";
Yup.setLocale({
  mixed: {
    required: globalTranslation(`${translatePrefix}:mixed.required`),
    notType: globalTranslation(`${translatePrefix}:mixed.notType`),
  },
  string: {
    min: ({ min }) =>
      globalTranslation(`${translatePrefix}:string.toShort`, { min }),
    max: ({ max }) =>
      globalTranslation(`${translatePrefix}:string.toLong`, { max }),
    email: globalTranslation(`${translatePrefix}:string.email`),
    length: ({ length }) =>
      globalTranslation(`${translatePrefix}:string.length`, { length }),
  },
  number: {
    min: ({ min }) =>
      globalTranslation(`${translatePrefix}:number.toLow`, { min }),
    max: ({ max }) =>
      globalTranslation(`${translatePrefix}:number.toMuch`, { max }),
    positive: globalTranslation(`${translatePrefix}:number.positive`),
  },
});

export default Yup;
