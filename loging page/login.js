document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Example: Simple static validation (replace with real authentication logic)
    if (username === 'admin' && password === 'password123') {
        document.getElementById('loginMessage').style.color = 'green';
        document.getElementById('loginMessage').textContent = 'Login successful!';
        // Redirect or perform other actions here
        // window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginMessage').style.color = 'red';
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
    }
});