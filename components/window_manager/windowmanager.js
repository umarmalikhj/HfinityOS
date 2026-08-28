function windowManager() {
    
}

export function windowControl(windowEl) {
    const closeBtn = windowEl.querySelector(".close");
    const miniBtn = windowEl.querySelector(".minimize");
    const maxBtn = windowEl.querySelector(".maximize");

    closeBtn.addEventListener("click", () => {
        windowEl.remove();
    })

    maxBtn.addEventListener("click", () => {
        windowEl.classList.toggle("fullscreen");
    })

    miniBtn.addEventListener("click", () => {
        windowEl.classList.add("minimized");
    })
}