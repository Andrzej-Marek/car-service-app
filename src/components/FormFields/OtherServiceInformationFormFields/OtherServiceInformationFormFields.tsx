import { DatePickerField, SelectField } from "@/components";
import { paymentMethodOptions } from "@/shared/selectOptions";
import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import FormFieldLabel from "../FormFieldLabel/FormFieldLabel";

interface OwnProps {
  keyValue: string;
}

type Props = OwnProps;

const OtherServiceInformationFormFields: FC<Props> = ({ keyValue }) => {
  const { t } = useTranslation(["otherServiceInformations", "buttons"]);

  return (
    <>
      <FormFieldLabel text={t("otherServiceInformations:title")} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <SelectField
            label={t("paymentMethod")}
            name={`${keyValue}.paymentMethod`}
            options={paymentMethodOptions}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <DatePickerField
            name={`${keyValue}.warrantyTime`}
            label={t("warrantyTime")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <DatePickerField
            name={`${keyValue}.serviceDate`}
            label={t("serviceDate")}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default OtherServiceInformationFormFields;
