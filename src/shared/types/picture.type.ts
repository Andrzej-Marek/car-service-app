import { PictureFormats } from "./pictureFormats.type";

export interface Picture {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: PictureFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  providerMetadata: null;
  createdAt: string;
  updatedAt: string;
}
