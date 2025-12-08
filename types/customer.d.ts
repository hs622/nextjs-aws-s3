import { IAddress } from "./address";
import { IBank } from "./bank";
import { ICompany } from "./company"; 

interface ICrypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDay: string;
  image: string;
  booldGroup: string;
  height: number;
  wight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: ICrypto;
  role: string;
}
