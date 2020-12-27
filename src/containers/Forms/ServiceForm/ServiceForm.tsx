import {
  CarVehicleFormFields,
  ServiceDetailsFormFields,
  ServiceCostsFormFields,
  PhotosFormField,
  OtherServiceInformationFormFields,
  PrimaryButton,
} from "@/components";
import { CustomForm } from "@/containers";
import { ServiceFormModel } from "@/shared/types";
import { FormikHelpers } from "formik";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { newServiceFormSchema } from "../NewServiceForm/newServiceForm.schema";

interface OwnProps {
  initialValues: ServiceFormModel;
  onSubmit: (
    serviceFormModel: ServiceFormModel,
    helpers: FormikHelpers<ServiceFormModel>
  ) => void;
}

type Props = OwnProps;

const ServiceForm: FC<Props> = ({ initialValues, onSubmit }) => {
  const { t } = useTranslation("common");
  return (
    <CustomForm<ServiceFormModel>
      initialValues={initialValues}
      onSubmit={onSubmit}
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
  );
};

const SubmitButtonWrapper = styled.div`
  max-width: 450px;
  width: 100%;

  margin-top: 20px;
`;

export default ServiceForm;
