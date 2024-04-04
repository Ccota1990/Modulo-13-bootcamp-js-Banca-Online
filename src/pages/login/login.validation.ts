import {
  Credentials,
  CredentialsformErrors,
  createEmptyCredentialsFormErrors,
} from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsformErrors;
}

export const validateForm = (credentials: Credentials): ValidationResult => {
  let validationResult = {
    succeeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };

  if (!credentials.user.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      user: "Debe informar el campo usuario",
    };
    validationResult.succeeded = false;
  }

  if (!credentials.password.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      password: "Debe informar el campo contraseña",
    };
    validationResult.succeeded = false;
  }

  return validationResult;
};
