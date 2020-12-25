import {
  CarVehicleFormFields,
  LoadingSpinner,
  Modal,
  OtherServiceInformationFormFields,
  PhotosFormField,
  PrimaryButton,
  ServiceCostsFormFields,
  ServiceDetailsFormFields,
  ServisLinkForClient,
} from "@/components";
import { CustomForm } from "@/containers";
import { createNewService, uploadRelatedFiles } from "@/shared/actions";
import { mapServiceFormModelToServiceDto } from "@/shared/mappers";
import { ServiceFormModel } from "@/shared/types";
import { FormikHelpers } from "formik";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import styled from "styled-components";
import { newServiceFormInitialValues } from "./newServiceForm.initialValues";
import { newServiceFormSchema } from "./newServiceForm.schema";

interface OwnProps {}

type Props = OwnProps;

const NewServiceForm: FC<Props> = () => {
  const { t } = useTranslation("common");
  const [createdServiceId, setCreatedServiceId] = useState<null | string>(null);
  const [uploadRelatedFilesAction, { reset: restUpload }] = useMutation(
    uploadRelatedFiles
  );
  const [createNewServiceAction, { reset }] = useMutation(createNewService);

  const onSubmitHandler = async (
    serviceFormModel: ServiceFormModel,
    { resetForm }: FormikHelpers<ServiceFormModel>
  ) => {
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

      setCreatedServiceId(createdServiceDto.data.serviceId!);
      resetForm();
    } catch (error) {}
    reset();
    restUpload();
  };

  return (
    <>
      <Modal
        isOpen={!!createdServiceId}
        onClose={() => setCreatedServiceId(null)}
      >
        <ServisLinkForClient createdServiceId={createdServiceId!} />
      </Modal>
      <LoadingSpinner />
      <CustomForm<ServiceFormModel>
        initialValues={newServiceFormInitialValues}
        onSubmit={onSubmitHandler}
        validationSchema={newServiceFormSchema}
      >
        {() => (
          <>
            <CarVehicleFormFields keyValue="vehicleDetails" />
            <ServiceDetailsFormFields />
            <ServiceCostsFormFields keyValue="serviceCosts" />
            <PhotosFormField name="photos" />
            <OtherServiceInformationFormFields keyValue="otherInformations" />
            <SubmitButtonWrapper>
              <PrimaryButton type="submit">{t("save")}</PrimaryButton>
            </SubmitButtonWrapper>
          </>
        )}
      </CustomForm>
    </>
  );
};

const SubmitButtonWrapper = styled.div`
  max-width: 450px;
  width: 100%;

  margin-top: 20px;
`;
export default NewServiceForm;
