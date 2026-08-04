const closeBtn = document.getElementById("close-btn");
const miniBtn = document.getElementById("minimize-btn");
const maxBtn = document.getElementById("maximize-btn");
const windowElement = document.getElementById("window");

closeBtn.onclick = () => {
    windowElement.remove();
}

