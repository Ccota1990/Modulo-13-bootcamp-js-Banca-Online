import Axios from "axios";
import { Account } from "./account-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
const urlAcountId = `${import.meta.env.VITE_BASE_API_URL}/account/`;

export const getAccountList = (): Promise<Account[]> =>
  Axios.get<Account[]>(url).then(({ data }) => data);

  
export const getAccountById = (id: string): Promise<Account> =>
Axios.get<Account>(urlAcountId + id).then(({ data }) => data);