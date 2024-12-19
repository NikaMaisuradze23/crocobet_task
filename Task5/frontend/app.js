document.addEventListener("DOMContentLoaded", () => {
    fetch('/api')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(err => {
            document.getElementById('message').textContent = "Failed to load message from the backend.";
            console.error(err);
        });
});
