import { AppLayout } from "@/layouts";
import React from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import classes from "./movement-list.module.css";
import { MovementListTableComponent } from "./components";
import { MovementVm } from "./movement-list.vm";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { getMovementList } from "./api";
import { mapAccountFromApiToVm } from "../account-list/account-list.mapper";
import { AccountVm } from "../account-list/account-list.vm";
import { getAccountById } from "../account-list/api";
import { appRoutes } from "@/core/router";



export const MovementListPage: React.FC = () => {
  
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [accountData, setAccountData] = React.useState<AccountVm>();
  const { id } = useParams();
  const navigate = useNavigate();


  React.useEffect(() => {
    if (!id || id === ':id') {
      navigate(
        generatePath(appRoutes.accountList)
      );
    }
    else{
      getMovementList(id?.toString()).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
      );
      getAccountById(id?.toString()).then((result) =>
      setAccountData(mapAccountFromApiToVm(result))
      );
    }
  }, []);


  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <p>SALDO DISPONIBLE
            <p>
            <span>
            {accountData?.balance} €
            </span>
            </p>
          </p> 
        </div>
        <div className={classes.accountDate}>
          <p>Alias: {accountData?.name}</p>
          <p>IBAN: {accountData?.iban}</p>
        </div>
        <MovementListTableComponent movementList={movementList}/>
      </div>
    </AppLayout>  
  );
};
