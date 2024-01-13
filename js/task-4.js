const formSubmit = document.querySelector(".login-form");

const buttonSubmitHandler = (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "")
    return alert("All form fields must be filled in");

  const logInData = {
    email,
    password,
  };
  console.log(logInData);
  form.reset();
};

formSubmit.addEventListener("submit", buttonSubmitHandler);
