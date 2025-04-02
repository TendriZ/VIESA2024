function logout() {
    window.location.href = "index.html"; // Kembali ke halaman login
}

function About() {
    window.location.href = "profile.html"; // Kembali ke halaman profile
}

function Settings() {
    window.location.href = "settings.html"; // Kembali ke halaman settings
}

function Home() {
    window.location.href = "dashboard.html"; // Kembali ke halaman ini sendiri
}
function UpcomingActivities() {
    window.location.href = "upcoming-activities.html"; // Ganti dengan halaman kegiatan mendatang
}

function Student() {
    window.location.href = "list-of-students.html"; // Ganti dengan halaman daftar mahasiswa
}

function InfoNongki() {
    window.location.href = "info-nongki.html"; // Ganti dengan halaman info nongkrong
}

function Momen() {
    window.location.href = "momen.html"; // Ganti dengan halaman momen
}


function toggleDropdown(event) {
event.stopPropagation(); // Mencegah klik di luar langsung menutup dropdown
let dropdown = document.getElementById("dropdownMenu");
console.log("Dropdown diklik!"); // Debugging
if (dropdown.style.display ==="none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
    console.log("Dropdown dibuka");
} else {
    dropdown.style.display = "none";
    console.log("Dropdown ditutup");
}
}

// Menutup dropdown saat klik di luar
document.addEventListener("click", function (event) {
let dropdown = document.getElementById("dropdownMenu");
let menuButton = document.querySelector(".dropdown-btn");

if (dropdown && menuButton && !menuButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
    console.log("Klik di luar, dropdown ditutup");
}
});