const contactForm = document.getElementById("contactForm");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const phoneArea = document.getElementById("phoneArea");
const phoneLocal = document.getElementById("phoneLocal");
const phonePers = document.getElementById("phonePers");
const phoneNumber = [phoneArea.value, phoneLocal.value, phonePers.value];
const date = document.getElementById("date");
const eventType = document.getElementById("eventType");
const eventAddress = document.getElementById("eventAddress");
const numPeople = document.getElementById("numPeople");
const message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: formName.value,
    email: formEmail.value,
    phone: phoneNumber,
    date: date.value.split("T"),
    eventType: eventType.value,
    eventAddress: eventAddress.value,
    numPeople: numPeople.value,
    message: message.value,
  };
  if (
    !formName.value ||
    !formEmail.value ||
    phoneNumber.filter((set) => set.length !== 3).length > 0 ||
    !date.value ||
    !eventType.value ||
    !eventAddress.value ||
    !numPeople.value ||
    !message.value
  ) {
    alert("Please fill in all fields");
    if (!formName.value) formName.classList.add("error");
    if (!formEmail.value) formEmail.classList.add("error");
    if (!phoneArea.value || !phoneLocal.value || !phonePers.value) {
      if (!phoneArea.value) phoneArea.classList.add("error");
      if (!phoneLocal.value) phoneLocal.classList.add("error");
      if (!phonePers.value) phonePers.classList.add("error");
    }

    if (!date.value) date.classList.add("error");
    if (!eventType.value) eventType.classList.add("error");
    if (!eventAddress.value) eventAddress.classList.add("error");
    if (!numPeople.value) numPeople.classList.add("error");
    if (!message.value) message.classList.add("error");
    return;
  }
  console.log(formData);
});
