import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
    movementItem : MovementVm
}

export const MovementListItemComponent : React.FC <Props> = (props) => {
   const { movementItem } = props;

   return(
    <div className={classes.row}>
        <span className={classes.dataCell}>{movementItem.fecha.toLocaleDateString()}</span>
        <span className={classes.dataCell}>{movementItem.fechaValor.toLocaleDateString()}</span>
        <span className={classes.dataCell}>{movementItem.name}</span>
        <span className={`${classes.dataCell} ${classes.alignRight} 
        ${movementItem.importe < "0" ? classes.importNegative : ''}`}>{movementItem.importe} €</span>
        <span className={`${classes.dataCell} ${classes.alignRight}`}>{movementItem.saldo} €</span>
    </div>

);
};
