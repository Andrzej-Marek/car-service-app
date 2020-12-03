import { Picture } from "./picture.type";

export interface Company {
  id: number;
  companyId: string;
  companyName: string;
  street: string;
  postalCode: string;
  streetNumber: string;
  city: string;
  vatNumber: string;
  user: null;
  companyLogo: Picture;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
