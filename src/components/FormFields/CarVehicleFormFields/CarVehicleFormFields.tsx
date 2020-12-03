import { TextField } from "@/components";
import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import FormFieldLabel from "../FormFieldLabel/FormFieldLabel";

interface OwnProps {
  keyValue: string;
}

type Props = OwnProps;

const CarVehicleFormFields: FC<Props> = ({ keyValue }) => {
  const { t } = useTranslation("vehicleSpecification");
  return (
    <>
      <FormFieldLabel text={t("title")} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField name={`${keyValue}.make`} label={t("make")} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField name={`${keyValue}.model`} label={t("model")} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            name={`${keyValue}.productionYear`}
            label={t("productionYear")}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            name={`${keyValue}.engineCapacity`}
            label={t("engineCapacity")}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            name={`${keyValue}.enginePower`}
            label={t("enginePower")}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField name={`${keyValue}.vinNumber`} label={t("vinNumber")} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            name={`${keyValue}.registrationNumber`}
            label={t("registrationNumber")}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CarVehicleFormFields;
