import { ENV } from "@/shared/constants";
import { Endpoint } from "@/shared/enums";
import { UploadRelatedFilesArgs } from "@/shared/types";
import Axios from "axios";

export const uploadRelatedFiles = async (
  uploadRelatedFilesArgs: UploadRelatedFilesArgs
) => {
  try {
    const formData = new FormData();
    formData.append("files", uploadRelatedFilesArgs.file);
    formData.append("ref", uploadRelatedFilesArgs.ref);
    formData.append("refId", uploadRelatedFilesArgs.refId);
    formData.append("field", uploadRelatedFilesArgs.field);

    await Axios.post(`${ENV.BACKEND_URL}${Endpoint.Upload}`, formData, {
      withCredentials: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};
