"use strict";

const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
      if (input.type == "email") {
        if (validateEmail(input.value)) {
          input.parentElement.classList.remove("error");
        } else {
          input.parentElement.classList.add("error");
        }
      }
      //   if (input.type == "password") {
      //     if (validatePassword(input.value)) {
      //       input.parentElement.classList.remove("error");
      //     } else {
      //       input.parentElement.classList.add("error");
      //     }
      //   }
    }
  });
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// function validatePassword(password) {
//   const pword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
//   return pword.test(password);
// }
