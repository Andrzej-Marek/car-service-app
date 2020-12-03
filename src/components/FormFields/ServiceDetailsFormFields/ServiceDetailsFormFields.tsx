import { TextField } from "@/components";
import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import FormFieldLabel from "../FormFieldLabel/FormFieldLabel";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetailsFormFields: FC<Props> = () => {
  const { t } = useTranslation("serviceDetails");
  return (
    <>
      <FormFieldLabel text={t("title")} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            name={`serviceDescription`}
            label={t("serviceDescription")}
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            name={`serviceDiagnosis`}
            label={t("serviceDiagnosis")}
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            name={`comments`}
            label={t("comments")}
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceDetailsFormFields;
