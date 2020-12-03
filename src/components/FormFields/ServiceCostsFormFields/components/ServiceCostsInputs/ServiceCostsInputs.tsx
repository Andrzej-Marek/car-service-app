import React, { FC } from "react";
import { AddNewElementButton, SelectField, TextField } from "@/components";
import { ServiceCostElement } from "@/shared/types";
import { Grid } from "@material-ui/core";
import { useField } from "formik";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { calculateServiceCost } from "@/shared/utils";
import { ServiceCostField } from "@/shared/enums";
import { taxRateOptions } from "@/shared/selectOptions";

interface OwnProps {
  keyValue: string;
  onAdd: (serviceCostElement: ServiceCostElement) => void;
}

type Props = OwnProps;

const ServiceCostsInputs: FC<Props> = ({ keyValue, onAdd }) => {
  const { t } = useTranslation(["serviceCosts", "buttons"]);
  const [_, { value, initialValue }, { setValue }] = useField<
    ServiceCostElement
  >(keyValue);

  const onBlurHandler = (fieldName: ServiceCostField) => {
    const calculatedValues = calculateServiceCost(value, fieldName);

    setValue({ ...value, ...calculatedValues });
  };

  const afterSelectTaxRate = (selectedValue: number) => {
    const calculatedValues = calculateServiceCost(
      { ...value, taxRate: selectedValue },
      ServiceCostField.TaxRate
    );

    setValue({ ...value, ...calculatedValues });
  };

  const onAddButtonClick = () => {
    onAdd(value);
    if (initialValue) {
      setValue({ ...initialValue, taxRate: value.taxRate });
    }
  };

  return (
    <InputWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <TextField name={`${keyValue}.title`} label={t("partDescription")} />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            name={`${keyValue}.quantity`}
            label={t("quantity")}
            type="number"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <SelectField
            name={`${keyValue}.taxRate`}
            label={t("taxRate")}
            options={taxRateOptions}
            afterSelect={afterSelectTaxRate}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            name={`${keyValue}.priceNet`}
            label={t("priceNet")}
            type="number"
            onBlur={() => onBlurHandler(ServiceCostField.PriceNet)}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            name={`${keyValue}.priceGross`}
            label={t("priceGross")}
            type="number"
            onBlur={() => onBlurHandler(ServiceCostField.PriceGross)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <AddNewElementButton onClick={onAddButtonClick}>
            {t("buttons:add")}
          </AddNewElementButton>
        </Grid>
      </Grid>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  max-width: 1200px;
`;

export default ServiceCostsInputs;
