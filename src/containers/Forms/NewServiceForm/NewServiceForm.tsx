import {
  CarVehicleFormFields,
  OtherServiceInformationFormFields,
  PhotosFormField,
  ServiceCostsFormFields,
  ServiceDetailsFormFields,
} from "@/components";
import { CustomForm } from "@/containers";
import { createNewService, uploadRelatedFiles } from "@/shared/actions";
import { mapServiceFormModelToServiceDto } from "@/shared/mappers";
import { ServiceFormModel } from "@/shared/types";
import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { useMutation } from "react-query";
import { newServiceFormInitialValues } from "./newServiceForm.initialValues";

interface OwnProps {}

type Props = OwnProps;

const NewServiceForm: FC<Props> = () => {
  const [uploadRelatedFilesAction, { reset: restUpload }] = useMutation(
    uploadRelatedFiles
  );
  const [createNewServiceAction, { error, isError, reset }] = useMutation(
    createNewService
  );

  const onSubmitHandler = async (serviceFormModel: ServiceFormModel) => {
    const serviceDto = mapServiceFormModelToServiceDto(serviceFormModel);
    try {
      const createdServiceDto = await createNewServiceAction(serviceDto);

      if (!createdServiceDto || !createdServiceDto.data.id) {
        return;
      }

      serviceFormModel.photos.map(async (fileEl) => {
        await uploadRelatedFilesAction({
          file: fileEl,
          refId: createdServiceDto.data.id!,
          ref: "service",
          field: "photos",
        });
      });
    } catch (error) {}
    reset();
    restUpload();
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
