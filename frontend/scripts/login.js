// login.js
const url = "http://localhost:8000";

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let loginData = {
            email: email,
            password: password,
        };

        fetch(`${url}/users/login`, {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

                if (res.status === "ok") {
                    alert("login successful")
                    // Login successful, store token in localStorage
                    localStorage.setItem("token", res.token);
                    localStorage.setItem("userName", res.user.username);
                    // Redirect to dashboard or any other page
                    window.location.href = "./dashboard.html";
                } else {
                    // Login failed, show error message
                    alert(res.msg);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again later.'); // Network error or server down
            });

});
