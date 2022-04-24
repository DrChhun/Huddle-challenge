// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const error = document.getElementsByClassName("error__input")[0];

// btn.addEventListener("click", function() {
//     const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (!re.test(input.value.toLowerCase())) {
//         error.style.display = "block";
//         error.style.color = "red";
//         input.style.borderColor = "red";
//     } else {
//         input.style.borderColor = "green";
//         error.style.display = "none";
//     }
    
// })

const input = document.querySelector(".input");

const submit = document.querySelector(".button");
const error = document.querySelector(".error");

submit.addEventListener("click", function () {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value.toLowerCase())) {
    error.style.display = "block";
    input.style.borderColor = "red";
    error.style.color = "red";
  } else {
    input.style.borderColor = "green";
    error.style.display = "none";
    input.style.color = "green";
  }
});

// error.style.display = "block";
// error.style.color = "white";

console.log(input);
console.log(btn);
console.log(error);