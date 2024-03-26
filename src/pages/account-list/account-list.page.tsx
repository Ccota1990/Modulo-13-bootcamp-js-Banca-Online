import React from "react";
import { Link, generatePath } from "react-router-dom";
import { appRoutes } from "@/core/router";


export const AccountListPage: React.FC = () => {
    return (
    <div>
        Account List
        <br />
        <Link to={generatePath(appRoutes.movements, {id: 1})}>
            Movimientos de la cuenta 1
        </Link>
        <br />
        <Link to={appRoutes.transfer}>
            Transferencias
        </Link>
        <br />
        <Link to={generatePath(appRoutes.transferFromAccount, {id: 1})}>
            Tranferencia desde la cuenta 1
        </Link>
    </div>
    )
};
