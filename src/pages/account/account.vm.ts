export interface Account {
    type: string;
    name: string;
}

export const createEmptyAccount = (): Account => ({
  type: "",
  name:"",
})

export interface AccountError {
  accountType: string,
  accountName: string,
}

export const createEmptyAccountError = () : AccountError => ({
  accountType: "",
  accountName: "",
})