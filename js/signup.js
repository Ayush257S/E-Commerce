let form = document.getElementById("input-field");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let obj = {
    username: form.elements["username"].value,
    mobile: form.elements["mobile"].value,
    email: form.elements["email"].value,
    password: form.elements["password"].value,
  };

  // Password validation: exactly 6 digits (0-9)
  const passwordPattern = /^\d{6}$/;

  if (!passwordPattern.test(obj.password)) {
    Swal.fire({
      icon: "warning",
      title: "Password must be at least 6 characters",
      showConfirmButton: true,
    });
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const data = await res.json();

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Account Created Successfully ☃️",
        showConfirmButton: false,
      });
      form.reset();
      homepage();
    } else {
      Swal.fire({
        icon: "error",
        title: "Signup Failed 😓",
        text: data.message,
        showConfirmButton: true,
      });
    }
  } catch (err) {
    console.log("Signup Error:", err);
  }
});

let homepage = () => {
  setTimeout(() => {
    window.location.href = "signin.html";
  }, 2000);
};