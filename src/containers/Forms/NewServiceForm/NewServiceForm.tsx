import { LoadingSpinner, Modal, ServisLinkForClient } from "@/components";
import { ServiceForm } from "@/containers";
import {
  createNewService,
  getServiceById,
  updateService,
  uploadRelatedFiles,
} from "@/shared/actions";
import { ServiceDto } from "@/shared/dtos";
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
  const [updateServiceAction] = useMutation(updateService);

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
    let serverServiceDto: ServiceDto;
    const serviceDto = mapServiceFormModelToServiceDto(serviceFormModel);
    try {
      if (IS_EDITABLE_FORM) {
        serverServiceDto = await updateServiceHandler(serviceDto);
        setCreatedServiceId(serverServiceDto.serviceId!);
        const newPhotos = serviceFormModel.photos.filter(
          (photo) => !get(photo, "url", false)
        );
        uploadPicturesHandler(newPhotos, serviceFormModel.id!);
        return;
      } else {
        serverServiceDto = await createdServiceHandler(serviceDto);
      }

      uploadPicturesHandler(serviceFormModel.photos, serviceFormModel.id!);

      setCreatedServiceId(serverServiceDto.serviceId!);
      resetForm();
      reset();
      restUpload();
    } catch (error) {}
  };

  const uploadPicturesHandler = (photos: File[], serviceId: number) => {
    photos.map(async (fileEl) => {
      await uploadRelatedFilesAction({
        file: fileEl,
        refId: serviceId.toString(),
        ref: "service",
        field: "photos",
      });
    });
  };

  const updateServiceHandler = async (
    serviceDto: ServiceDto
  ): Promise<ServiceDto> => {
    if (!serviceDto.id) {
      throw new Error("Błąd z serwerem");
    }

    const updatedService = await updateServiceAction({
      serviceDto,
      serviceId: serviceDto.id,
    });

    if (!updatedService) {
      throw new Error("Błąd z serwerem");
    }
    return updatedService;
  };

  const createdServiceHandler = async (
    serviceDto: ServiceDto
  ): Promise<ServiceDto> => {
    const createdService = await createNewServiceAction(serviceDto);

    if (!createdService) {
      throw new Error("Błąd z serwerem");
    }

    return createdService;
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
