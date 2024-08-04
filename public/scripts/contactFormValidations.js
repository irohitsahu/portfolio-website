let defaultFormValue = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

let error = {
  name: null,
  email: null,
  mobile: null,
  message: null,
};

function handleFormInputChange(e) {
  const { name, value } = e.target;

  defaultFormValue = {
    ...defaultFormValue,
    [name]: value,
  };

  error = {
    ...error,
    [name]: null,
  };
}

function validateInput() {
  const newEror = [];
  if (defaultFormValue.name === "" || defaultFormValue === null)
    newEror.name = "Name Is Required";
  if (defaultFormValue.email === "" || defaultFormValue === null)
    newEror.email = "Email Is Required";
  if (defaultFormValue.message === "" || defaultFormValue === null)
    newEror.message = "Message Is Required";

  return newEror;
}

function handelFormSubmit(e) {
  console.log("submit clicked");
  e.preventDefault();

  const validatedError = validateInput();
  if (Object.keys(validatedError).length > 0) {
    error = validatedError;
  }
}
