import { LoadingSpinner, Modal, ServisLinkForClient } from "@/components";
import { ServiceForm } from "@/containers";
import {
  createNewService,
  getServiceById,
  uploadRelatedFiles,
} from "@/shared/actions";
import {
  mapServiceFormModelToServiceDto,
  mapServiceToServiceFormModel,
} from "@/shared/mappers";
import { ServiceFormModel } from "@/shared/types";
import { FormikHelpers } from "formik";
import { get } from "lodash";
import React, { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { newServiceFormInitialValues } from "./newServiceForm.initialValues";

interface OwnProps {}

type Props = OwnProps;

const NewServiceForm: FC<Props> = () => {
  const { serviceId } = useParams<{ serviceId: string | undefined }>();
  const IS_EDITABLE_FORM = !!serviceId;

  const [createdServiceId, setCreatedServiceId] = useState<null | string>(null);
  const [uploadRelatedFilesAction, { reset: restUpload }] = useMutation(
    uploadRelatedFiles
  );
  const [initialFormValues, setInitialFormValues] = useState(
    newServiceFormInitialValues
  );
  const [getServiceByIdAction] = useMutation(getServiceById);
  const [createNewServiceAction, { reset }] = useMutation(createNewService);

  // @ts-ignore
  useEffect(async () => {
    if (!IS_EDITABLE_FORM) {
      setInitialFormValues(newServiceFormInitialValues);
      return;
    }
    getInitialFormValues();
  }, [IS_EDITABLE_FORM]);

  const getInitialFormValues = async () => {
    const data = await getServiceByIdAction(serviceId);
    const serviceData = get(data, "data", null);

    if (!serviceData) {
      setInitialFormValues(newServiceFormInitialValues);
      return;
    }

    const mappedValues = mapServiceToServiceFormModel(serviceData);

    setInitialFormValues(mappedValues);
  };

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
      <ServiceForm
        initialValues={initialFormValues}
        onSubmit={onSubmitHandler}
      />
    </>
  );
};

export default NewServiceForm;
