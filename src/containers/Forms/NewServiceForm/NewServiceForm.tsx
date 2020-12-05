import {
  CarVehicleFormFields,
  OtherServiceInformationFormFields,
  PhotosFormField,
  ServiceCostsFormFields,
  ServiceDetailsFormFields,
} from "@/components";
import { CustomForm } from "@/containers";
import { createNewService } from "@/shared/actions";
import { mapServiceFormModelToServiceDto } from "@/shared/mappers";
import { ServiceFormModel } from "@/shared/types";
import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { useMutation, useQueryCache } from "react-query";
import { newServiceFormInitialValues } from "./newServiceForm.initialValues";

interface OwnProps {}

type Props = OwnProps;

const NewServiceForm: FC<Props> = () => {
  const [createNewServiceAction, { error, isError, reset }] = useMutation(
    createNewService
  );

  const onSubmitHandler = async (serviceFormModel: ServiceFormModel) => {
    const serviceDto = mapServiceFormModelToServiceDto(serviceFormModel);
    console.log(serviceDto.vehicleDetails.productionYear);
    const data = await createNewServiceAction(serviceDto);
    reset();

    console.log("data", data);
  };

  console.log(isError ? error : "Brak errora");
  return (
    <CustomForm<ServiceFormModel>
      initialValues={newServiceFormInitialValues}
      onSubmit={onSubmitHandler}
      // validationSchema={newServiceFormSchema}
    >
      {() => (
        <>
          <CarVehicleFormFields keyValue="vehicleDetails" />
          <ServiceDetailsFormFields />
          <ServiceCostsFormFields keyValue="serviceCosts" />
          <PhotosFormField name="photos" />
          <OtherServiceInformationFormFields keyValue="otherInformations" />
          <Button type="submit" variant="contained">
            SUBMIT
          </Button>
        </>
      )}
    </CustomForm>
  );
};

export default NewServiceForm;
