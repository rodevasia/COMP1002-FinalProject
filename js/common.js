// Create a global header and footer using JavaScript
document.addEventListener("DOMContentLoaded", function() {
    var header = document.createElement("header");
    header.innerHTML = `
        <div class="header-flex-container">
            <a href="index.html">
                <img src="./images/logo.png" alt="Logo" style="width: 100px; border-radius: 5px;">
            </a>
            <div class="navigation-links">
                <a href="about.html">About Us</a>
                <a href="contact.html">Contact Us</a>
            </div>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    var footer = document.createElement("footer");
    footer.innerHTML = `
        <div><span>&copy; 2024 PrintHub Canada. All rights reserved.</span></div>
    `;
    document.body.appendChild(footer);
});
