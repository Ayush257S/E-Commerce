let form = document.getElementById("input-data");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const credentials = {
    email: form.email.value,
    password: form.password.value,
  };

  try {
    const res = await fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Login Successful 🎉",
        showConfirmButton: false,
      });
      homepage();
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: data.message,
        showConfirmButton: false,
      });
    }
  } catch (err) {
    // getting error here
    console.error(err);
  }

  form.reset();
});

let homepage = () => {
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
};