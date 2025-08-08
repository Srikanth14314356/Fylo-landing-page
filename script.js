function validate() {
  const email = document.getElementById("getemail").value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const message =document.getElementById("message");
  if (pattern.test(email)) {
   message.textContent="Valid email Address";
  } else {
     message.textContent="Pleace enter Valid Address";
     message.style.color="red";
     
  }
}
