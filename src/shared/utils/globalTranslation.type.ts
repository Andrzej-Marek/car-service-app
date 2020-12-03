import i18next from "i18next";

export const globalTranslation = (translationPath: string) => {
  return i18next.t(translationPath) + "";
};
