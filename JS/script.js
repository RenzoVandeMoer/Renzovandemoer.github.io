// SIDEBAR: For opening the sidebar
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("sidenavbar").classList.toggle("active");
    document.getElementById("content-wrapper").classList.toggle("active");
});

// SIDEBAR: For closing the sidebar
document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("sidenavbar").classList.remove("active");
    document.getElementById("content-wrapper").classList.remove("active");
});
