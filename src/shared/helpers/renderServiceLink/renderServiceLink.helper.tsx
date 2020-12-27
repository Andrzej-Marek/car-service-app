import React from "react";
import { ENV } from "@/shared/constants";

export const renderServiceLink = (serviceId: string, linkText?: string) => {
  return <a href={`${ENV.CLIENT_URL}/${serviceId}`}>{linkText || serviceId}</a>;
};
