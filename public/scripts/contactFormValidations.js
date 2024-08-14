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
  renderErrors();
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

function renderErrors() {
  for (let name in error) {
    const errorElement = document.querySelector(`.error-msg[name=${name}]`);
    if (error[name]) {
      errorElement.textContent = error[name];
      errorElement.style.display = "inline";
    } else {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const validatedError = validateInput();
  if (Object.keys(validatedError).length > 0) {
    error = validatedError;
    renderErrors();
  } else {
    const formData = new FormData(e.target);
    formData.append("access_key", "4b94d08b-901f-4837-bf4b-2b8496cabc74");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    if (res.success) {
      console.log("Success", res);
      alert(
        "Your message has been sent successfully. You will be contacted via the provided email or mobile number."
      );
    }

    defaultFormValue = {
      name: "",
      email: "",
      mobile: "",
      message: "",
    };
    error = {
      name: null,
      email: null,
      mobile: null,
      message: null,
    };
    renderErrors();
    document.querySelector(".contact-me-form").reset();
  }
}
