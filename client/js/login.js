document.getElementById("submit-button").addEventListener("click", async () => {
  document.getElementById("error-text").innerText = "";
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username.length === 0) {
    document.getElementById("error-text").innerText = "Username is empty";
    return;
  }
  if (password.length === 0) {
    document.getElementById("error-text").innerText = "Password is empty";
    return;
  }
  const response = await fetch(
    `/login?username=${username}&password=${password}`,
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
