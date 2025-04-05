document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;   
    
    if (username === "viesa24" && password === "paketoganteng1234") {
        document.getElementById("pesanTambahan").innerText = "Login Berhasil, mengalihkan...";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect ke halaman berikutnya

        }, 10);
    } else {
        document.getElementById("pesanTambahan").innerText = "Username atau Password salah";
        setTimeout(() => {
            window.location.href = "index.html"; // Reinput username and password
        }, 1000);
    }
});