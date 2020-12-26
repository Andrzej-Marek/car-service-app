import i18next from "i18next";

export const globalTranslation = (translationPath: string, args?: any) => {
  return i18next.t(translationPath, args) + "";
};
