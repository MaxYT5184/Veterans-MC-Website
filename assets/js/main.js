function copyIP() {
    const ip = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(ip);
    alert("IP copied to clipboard: " + ip);
}
