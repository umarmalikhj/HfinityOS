const closeBtn = document.getElementById("close-btn");
const miniBtn = document.getElementById("minimize-btn");
const maxBtn = document.getElementById("maximize-btn");
const windowElement = document.getElementById("window");

closeBtn.onclick = () => {
    windowElement.classList.add("hidden");
}

maxBtn.onclick = () => {
    windowElement.classList.toggle("fullscreen");
}

miniBtn.onclick = () => {
    windowElement.classList.add("minimized");
}