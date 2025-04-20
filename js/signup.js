let userData = JSON.parse(localStorage.getItem("userdata")) || [];
let form = document.getElementById("input-field");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    username: form.elements["username"].value,
    mobile: form.elements["mobile"].value,
    email: form.elements["email"].value,
    password: form.elements["password"].value,
  };

  let exists = userData.some((user) => user.email === obj.email);
  if (exists) {
    Swal.fire({
      icon: "error",
      title: "Email already registered 😓",
      showConfirmButton: true,
    });
    return;
  }

  if (obj.password.length < 6) {
    Swal.fire({
      icon: "warning",
      title: "Password must be at least 6 characters",
      showConfirmButton: true,
    });
    return;
  }

  userData.push(obj);
  localStorage.setItem("userdata", JSON.stringify(userData));

  Swal.fire({
    icon: "success",
    title: "Account Created Successfully ☃️",
    showConfirmButton: false,
  });

  form.reset();
  homepage();
});

let homepage = () => {
  setTimeout(() => {
    window.location.href = "signin.html";
  }, 2000);
};