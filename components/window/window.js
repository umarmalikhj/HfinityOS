export function createWindow(onClose) {
    const desktop = document.querySelector(".desktop");

    const windowEl = document.createElement("section");
    windowEl.className = ("window");

    windowEl.innerHTML = `
        <div class="window-topbar">

            <div class="window-controls">

                <button class="close">
                    <i class="fa-solid fa-circle-xmark" style="color: #FF5F58;"></i>
                </button>
                <button class="minimize">
                    <i class="fa-solid fa-circle-minus" style="color: #FEBC2E;"></i>
                </button>
                <button class="maximize">
                    <i class="fa-solid fa-circle-plus" style="color: #27C840;"></i>
                </button>

            </div>

            <div class="window-header"></div>

        </div>

        <div class="window-body">

            <div class="window-sidebar"></div>

            <div class="window-content"></div>

        </div>
    `;

    desktop.appendChild(windowEl);

    const closeBtn = windowEl.querySelector(".close");
    const miniBtn = windowEl.querySelector(".minimize");
    const maxBtn = windowEl.querySelector(".maximize");

    closeBtn.addEventListener("click", () => {
        onClose();
        windowEl.remove();
    })

    maxBtn.addEventListener("click", () => {
        windowEl.classList.toggle("fullscreen");
    })

    miniBtn.addEventListener("click", () => {
        windowEl.classList.add("minimized");
    })

    return windowEl;
}