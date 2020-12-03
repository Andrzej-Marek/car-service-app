export interface VehicleDetails {
  id?: number;
  make: string;
  model: string;
  productionYear: string | null;
  mileage: {
    id?: number;
    mileage: number | null;
    unit: string;
  } | null;
  engineCapacity: number | null;
  enginePower: number | null;
  vinNumber: string | null;
  registrationNumber: string | null;
}
