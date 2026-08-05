const dockItems = document.querySelectorAll(".dock-item");

const apps = {
    window: openWindow,
    brave: openBrave,
    mail: openMail,
    chatgpt: openChatgpt,
    appstore: openAppstore,
    settings: openSettings,
    photos: openPhotos,
    vscode: openVSCode,
    bin: openBin
}

import { openWindow } from "../../apps/window/window.js";

dockItems.forEach(item => {
    item.addEventListener("click", () => {
        apps[item.dataset.app]();
    })
})