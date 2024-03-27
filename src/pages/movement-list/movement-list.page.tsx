import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.module.css";


export const MovementListPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
        </div>
      
      </div>
    </AppLayout>
  )
};
