import { ENV } from "@/shared/constants";
import { Endpoint } from "@/shared/enums";
import Axios from "axios";

export const uploadRelatedFiles = async ({
  files,
  relatedId,
}: {
  files: File[];
  relatedId: string;
}) => {
  try {
    files.map(async (file) => {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("ref", "service");
      formData.append("refId", relatedId);
      formData.append("field", "photos");

      await Axios.post(`${ENV.BACKEND_URL}${Endpoint.Upload}`, formData, {
        withCredentials: true,
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};
