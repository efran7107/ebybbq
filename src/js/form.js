const contactForm = document.getElementById("contactForm");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const phoneArea = document.getElementById("phoneArea");
const phoneLocal = document.getElementById("phoneLocal");
const phonePers = document.getElementById("phonePers");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: formName.value,
    email: formEmail.value,
    phone: `${phoneArea.value}-${phoneLocal.value}-${phonePers.value}`,
  };
  console.log(formData);
});
