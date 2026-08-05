export function createWindow() {
    const desktop = document.querySelector(".desktop");

    const window = document.createElement("section");
    window.className = "window";

    window.innerHTML = `
        <div class="window-sidebar">
                
            <div class="window-controls">
                <button class="close">
                    <i class="fa-solid fa-circle-xmark" style="color: #FF5F58;" id="close-btn"></i>
                </button>
                <button class="minimize">
                    <i class="fa-solid fa-circle-minus" style="color: #FEBC2E;" id="minimize-btn"></i>
                </button>
                <button class="maximize">
                    <i class="fa-solid fa-circle-plus" style="color: #27C840;" id="maximize-btn"></i>
                </button>
            </div>

            <div class="sidebar-links">

                <!-- Sidebar Content loaded dynamically-->

            </div>

        </div>

        <div class="window-main">
            <div class="window-header">

                <!-- window header loaded dynamically -->

            </div>

            <div class="window-content">

                <!-- window content loaded dynamically -->

            </div>

        </div>
    `;

    desktop.appendChild(window);

    const closeBtn = document.querySelector(".close");
    const miniBtn = document.querySelector(".minimize");
    const maxBtn = document.querySelector(".maximize");
    // const windowElement = document.getElementById("window");

    closeBtn.onclick = () => {
        // window.classList.add("hidden");
        // window.remove();
    }

    maxBtn.onclick = () => {
        window.classList.toggle("fullscreen");
    }

    miniBtn.onclick = () => {
        window.classList.add("minimized");
    }

    

    return window;
}

