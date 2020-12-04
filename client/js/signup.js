document.getElementById("submit-button").addEventListener("click", async () => {
  document.getElementById("error-text").innerText = "";
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username.length < 8) {
    document.getElementById("error-text").innerText =
      "Username must be at least 8 characters";
    return;
  }
  if (password.length < 8) {
    document.getElementById("error-text").innerText =
      "Password must be at least 8 characters";
    return;
  }
  const response = await fetch(
    `/signup?username=${username}&password=${password}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    response.json().then((data) => {
      document.getElementById("error-text").innerText = data.error;
      return;
    });
  } else {
    localStorage.setItem("username", username);
    window.location.href = "welcome";
  }
});

window.onload = function () {
  if (localStorage.getItem("username") !== null) {
    window.location.href = "welcome";
  }
};
