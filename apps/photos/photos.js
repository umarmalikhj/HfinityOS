import { createWindow } from "../../components/window/window.js";

export function openPhotos() {
    const windowEl = createWindow();

    // loadSidebar(windowEl);
    loadHeader(windowEl);
    // loadContent(windowEl);  
    return windowEl;
}

function loadHeader(windowEl) {
    const header = windowEl.querySelector(".window-header");

    header.innerHTML = `
        <div>Hi</div>
    `;
};