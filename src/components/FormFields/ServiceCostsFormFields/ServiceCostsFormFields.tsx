import { SelectField, Table } from "@/components";
import { currencyOptions } from "@/shared/selectOptions";
import {
  ServiceCost,
  ServiceCostElement,
  ServiceCostTable,
} from "@/shared/types";
import { Grid } from "@material-ui/core";
import { useField } from "formik";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import FormFieldLabel from "../FormFieldLabel/FormFieldLabel";
import { ServiceCostsInputs } from "./components";
import { serviceCostsTableColumns } from "./serviceCostsTable.columns";

interface OwnProps {
  keyValue: string;
}

type Props = OwnProps;

const ServiceCostsFormFields: FC<Props> = ({ keyValue }) => {
  const [_, { value }, { setValue }] = useField<ServiceCost>(keyValue);
  const { t } = useTranslation(["serviceCosts", "buttons"]);

  const createCostListForTableFormat = (): ServiceCostTable[] => {
    const costList = value.costsList.map(
      (cost) =>
        ({
          currency: value.currency,
          priceGross: cost.priceGross,
          priceNet: cost.priceNet,
          quantity: cost.quantity,
          title: cost.title,
          total: cost.priceGross * cost.quantity,
          taxRate: cost.taxRate,
        } as ServiceCostTable)
    );

    return costList;
  };

  const deleteListElement = (elementIndex: number) => {
    const costsListCopy = value.costsList;

    costsListCopy.splice(elementIndex, 1);

    setValue({ ...value, costsList: costsListCopy });
  };

  const onAddNewServiceCostHandler = (
    serviceCostElement: ServiceCostElement
  ) => {
    setValue({ ...value, costsList: [...value.costsList, serviceCostElement] });
  };
  const createdCostList = createCostListForTableFormat();

  return (
    <>
      <FormFieldLabel text={t("title")} />
      <Grid container spacing={2}>
        <Grid item xs={6} sm={5} md={3} lg={2}>
          <SelectField
            name={`${keyValue}.currency`}
            label={t("currency")}
            options={currencyOptions}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Table<ServiceCostTable>
            data={createdCostList}
            columns={serviceCostsTableColumns({ deleteListElement })}
            withFooter
          />
        </Grid>
      </Grid>
      <ServiceCostsInputs
        keyValue={`${keyValue}.formFieldCost`}
        onAdd={onAddNewServiceCostHandler}
      />
    </>
  );
};

export default ServiceCostsFormFields;
