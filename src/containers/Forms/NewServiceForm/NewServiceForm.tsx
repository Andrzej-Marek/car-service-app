import {
  CarVehicleFormFields,
  OtherServiceInformationFormFields,
  PhotosFormField,
  ServiceCostsFormFields,
  ServiceDetailsFormFields,
} from "@/components";
import { CustomForm } from "@/containers";
import { ServiceFormModel } from "@/shared/types";
import React, { FC } from "react";
import { newServiceFormInitialValues } from "./newServiceForm.initialValues";

interface OwnProps {}

type Props = OwnProps;

const NewServiceForm: FC<Props> = () => {
  return (
    <CustomForm<ServiceFormModel>
      initialValues={newServiceFormInitialValues}
      onSubmit={(values) => console.log("values", values)}
    >
      {() => (
        <>
          <CarVehicleFormFields keyValue="vehicleDetails" />
          <ServiceDetailsFormFields />
          <ServiceCostsFormFields keyValue="serviceCosts" />
          <PhotosFormField />
          <OtherServiceInformationFormFields />
        </>
      )}
    </CustomForm>
  );
};

export default NewServiceForm;
