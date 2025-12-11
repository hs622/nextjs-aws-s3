export interface IAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  country: string;
}