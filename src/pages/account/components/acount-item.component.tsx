import React, { useEffect } from "react";
import classes from "./acount-item.component.module.css"
import { Account } from "../api";
import { createEmptyAccount } from "../account.vm";

interface Props {
    handleAccount: (accountInfo : Account) => void;
}

export const CountComponent: React.FC<Props> = () => {
    const[newAccount, setNewAccount ] = React.useState<Account>(
      createEmptyAccount()
    );
    
  const handleAccountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>{
    setNewAccount({
        ...newAccount,
        [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    console.log(newAccount)
  },[newAccount]) 

    
    return (
        <form >
            <div className={classes.formContainer}>
            <div>
                <label>Tipo de cuenta:</label>
                <select 
                    className={classes.large}
                    name="type"
                    onChange={handleAccountChange}
                    >
                    <option value="">Seleccione un tipo</option>
                    <option>Cuenta corriente</option>
                    <option>Ahorro</option>
                </select>
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
            </div>
            </div>
            <button type="submit" className={classes.btnGuardar} >GUARDAR</button>
        </form>
    )
}

