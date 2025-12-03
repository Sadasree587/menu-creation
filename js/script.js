// Sidebar toggle
const sidebar = document.getElementById("sidebar");
document.getElementById("hamburger").onclick = () => {
    sidebar.classList.toggle("open");
};

// Search open/close
const overlay = document.getElementById("searchOverlay");
document.getElementById("searchBtn").onclick = () => {
    overlay.classList.add("active");
    document.getElementById("searchInput").focus();
};

document.getElementById("closeSearch").onclick = () => {
    overlay.classList.remove("active");
};

// Bottom nav active toggle
document.querySelectorAll(".bn-item").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
        document.querySelectorAll(".bn-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});
