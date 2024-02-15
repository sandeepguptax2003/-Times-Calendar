// signup.js
const url = "http://localhost:8000";

    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let signdata = {
            username: username,
            email: email,
            password: password,
        };

        fetch(`${url}/users/signup`, {
            method: "POST",
            body: JSON.stringify(signdata),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
            console.log(res);

            if (res.status) {
               alert("Registration successful")
                window.location.href = "./login.html";
            
            } else {
               alert(res.msg)
            }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again later.'); // Network error or server down
            });
   
});
