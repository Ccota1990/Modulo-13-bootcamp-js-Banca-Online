import * as apiModel from "./api"
import * as viewModel from "./account.vm"

export const mapAccountToApi = (
    account: apiModel.Account ): viewModel.Account=> ({
        type: account.type,
        name: account.name,
})