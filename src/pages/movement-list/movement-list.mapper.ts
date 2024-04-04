import * as apiModel from "./api/movement.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    fecha: new Date (movement.transaction),
    fechaValor:new Date (movement.realTransaction),
    name: movement.description,
    importe: movement.amount.toString(),
    saldo: movement.balance.toString(),
  }));
