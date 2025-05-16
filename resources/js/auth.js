function isUserLoggedIn() {
    return fetch('http://localhost:8080/api/auth/current-user', {
        method: 'GET',
        credentials: 'include', // Crucial for sending cookies
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 403) {
            // Session expired or invalid
            return { authenticated: false };
        }
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.authenticated) {
            console.log('User is logged in with ID:', data.userId);
            return true;
        }
        return false;
    })
    .catch(error => {
        console.error('Error checking login status:', error);
        return false;
    });
}



   
