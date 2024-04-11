import React from "react";
import { AppLayout } from "@/layouts";
import classes from "./account.page.module.css";
import { mapAccountToApi } from "./account.mapper";
import { saveAccount } from "./api";
import { Account} from "./account.vm";
import { CountComponent } from "./components";



export const AccountPage: React.FC =() =>{
  

  const hadleAccount = (accountInfo: Account)=>{
    const newAccount = mapAccountToApi(accountInfo);
    saveAccount(newAccount).then((result)=>{
      if (result) {
        alert ("Cuenta guardada correctamente");
      } else {
        alert (" No se ha podido guardar la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <CountComponent  
        onAccount={hadleAccount}
        />
      </div>
    </AppLayout>

  );
};
