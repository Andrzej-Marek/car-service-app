import { DatePickerField, TextField } from "@/components";
import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import FormFieldLabel from "../FormFieldLabel/FormFieldLabel";

interface OwnProps {}

type Props = OwnProps;

const OtherServiceInformationFormFields: FC<Props> = () => {
  const { t } = useTranslation(["otherServiceInformations", "buttons"]);
  return (
    <>
      <FormFieldLabel text={t("otherServiceInformations:title")} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <TextField name="paymentMethod" label={t("paymentMethod")} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <TextField name="warrantyTime" label={t("warrantyTime")} />
        </Grid>
      </Grid>
    </>
  );
};

export default OtherServiceInformationFormFields;
