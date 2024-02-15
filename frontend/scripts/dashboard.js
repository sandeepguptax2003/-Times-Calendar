document.addEventListener('DOMContentLoaded', () => {

     // Get today's date
     const todayDateElement = document.getElementById('today-date');
     const today = new Date();
     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     const formattedDate = today.toLocaleDateString('en-US', options);
     todayDateElement.textContent = formattedDate;
 
     // Get and display current time every second
     function updateTime() {
         const currentTimeElement = document.getElementById('current-time');
         const now = new Date();
         const formattedTime = now.toLocaleTimeString('en-US');
         currentTimeElement.textContent = formattedTime;
     }
 
     updateTime(); // Call initially to avoid delay
     setInterval(updateTime, 1000); // Update time every second


    
});

// Retrieve username from token and display in header
const token = localStorage.getItem("token");
const userName = localStorage.getItem('userName');
if(token)
    document.getElementById('user-info').textContent = `${userName}`;

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', () => {
    // Clear token from local storage
    localStorage.removeItem('token');
    // Redirect to login page
    window.location.href = "./login.html";
});