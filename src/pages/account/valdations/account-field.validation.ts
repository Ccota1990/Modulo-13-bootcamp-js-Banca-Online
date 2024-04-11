import { 
    buildValidationSucceededResult, 
    buildRequiredFieldValidationFailedResponse,
    isStringValueInformed,
    FieldValidationResult} 
from "@/common/validations";

export const validateAccountTypeField = (
    value: string
  ): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
      return buildRequiredFieldValidationFailedResponse();
    }
  
    return buildValidationSucceededResult();
  };

  export const validateNameField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
      return buildRequiredFieldValidationFailedResponse();
    }
  
    return buildValidationSucceededResult();
  };