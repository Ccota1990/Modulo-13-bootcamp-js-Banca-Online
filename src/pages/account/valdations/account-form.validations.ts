import { FormValidationResult } from "@/common/validations";
import { Account, AccountError } from "../account.vm";
import { validateAccountTypeField, validateNameField } from "./account-field.validation";



export const validateAccount = (account: Account
) : FormValidationResult<AccountError> =>{
    const fieldValidationResults =[
        validateAccountTypeField (account.type),
        validateNameField (account.name),
    ];

    const formValidationResult: FormValidationResult<AccountError> = {
        succeeded :fieldValidationResults.every((f) =>f.succeeded),
        errors: {
            accountType: fieldValidationResults[0].errorMessage ?? "",
            accountName: fieldValidationResults[1].errorMessage ?? "",
        },
    };
    return formValidationResult;
    
}