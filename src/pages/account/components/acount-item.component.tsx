import React from "react";
import classes from "./acount-item.component.module.css"
import { Account } from "../api";
import { AccountError, createEmptyAccount, createEmptyAccountError } from "../account.vm";
import { validateAccount } from "../valdations"

interface Props {
    onAccount: (accountInfo : Account) => void;
}

export const CountComponent: React.FC<Props> = (props) => {
    const {onAccount} = props

    const[newAccount, setNewAccount ] = React.useState<Account>(
      createEmptyAccount()
    );

    const [errors, setErrors] = React.useState<AccountError> (
        createEmptyAccountError()
    );
    

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const accountValidationResult = validateAccount(newAccount);
    setErrors(accountValidationResult.errors);
    if (accountValidationResult.succeeded){
        onAccount(newAccount);
    }
  };


  const handleAccountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>{
    setNewAccount({
        ...newAccount,
        [e.target.name]: e.target.value
    });
  };


    
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
            <div>
                <label>Tipo de cuenta:</label>
                <select 
                    className={classes.select}
                    name="type"
                    onChange={handleAccountChange}
                    >
                    <option value="">Seleccione un tipo</option>
                    <option value="1">Cuenta Corriente</option>
                    <option value="2">Cuenta Ahorro</option>
                    <option value="3">Cuenta Nómina</option>
                </select>
                <p className={classes.error}>{errors.accountType}</p>
            </div>
            <div>
                <label>Alias:</label> 
                    <input
                        type="text"
                        name="name"
                        className={classes.large}
                        onChange={handleAccountChange}
                        placeholder="Alias"
                        /> 
                        <p className={classes.error}>{errors.accountName}</p>       
            </div>
            </div>
            <button type="submit" className={classes.btnGuardar} >GUARDAR</button>
        </form>
    )
}

