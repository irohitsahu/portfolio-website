let defaultFormValue = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

function handleFormInputChange(e) {
  const { name, value } = e;

  defaultFormValue = {
    ...defaultFormValue,
    [name]: value,
  };
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateMobile(mobile) {
  const regex = /^(?:\+91|0)?[0-9]{10}$/;
  return regex.test(mobile);
}

function validateInput() {
  let isValid = true;

  const nameErrorInput = document.getElementsByClassName("em-name")[0];
  const mobileErrorInput = document.getElementsByClassName("em-mobile")[0];
  const emailErrorInput = document.getElementsByClassName("em-email")[0];
  const messageErrorInput = document.getElementsByClassName("em-message")[0];

  nameErrorInput.innerText = "";
  mobileErrorInput.innerText = "";
  emailErrorInput.innerText = "";
  messageErrorInput.innerText = "";

  if (!defaultFormValue.name) {
    nameErrorInput.innerText = "Name is required";
    isValid = false;
  }
  if (!defaultFormValue.email) {
    emailErrorInput.innerText = "Email is required";
    isValid = false;
  } else if (!validateEmail(defaultFormValue.email)) {
    emailErrorInput.innerText = "Invalid email format";
    isValid = false;
  }

  if (defaultFormValue.mobile && !validateMobile(defaultFormValue.mobile)) {
    mobileErrorInput.innerText = "Invalid mobile number (must be 10 digits)";
    isValid = false;
  }

  if (!defaultFormValue.message) {
    messageErrorInput.innerText = "Message is required";
    isValid = false;
  }

  return isValid;
}

function handleFormSubmit(e) {
  const submitBtn = document.getElementsByClassName("submit-btn")[0];
  const form = document.getElementsByClassName("contact-me-form")[0];
  e.preventDefault();

  const isFormValid = validateInput();

  if (isFormValid) {
    defaultFormValue = {
      ...defaultFormValue,
      access_key: "4b94d08b-901f-4837-bf4b-2b8496cabc74",
    };
    console.log("Form submitted successfully", defaultFormValue);
    const json = JSON.stringify(defaultFormValue);
    console.log(json);
    submitBtn.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          submitBtn.innerHTML = "Your Message Has Been Sent Successfully";
        } else {
          console.log(response);
          submitBtn.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        submitBtn.innerHTML = "Something went wrong!";
      })
      .then(function () {
        defaultFormValue = {
          name: "",
          email: "",
          mobile: "",
          message: "",
        };
        form.reset();
        setTimeout(() => {
          submitBtn.innerText = "Submit";
        }, 3000);
      });
  } else {
    console.log("Form submission prevented due to validation errors.");
  }
}
