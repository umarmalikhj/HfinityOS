import { openFinder } from "../../apps/finder/finder.js";

const dockItems = document.querySelectorAll(".dock-item");


const apps = {
    finder: openFinder
    // brave: openBrave,
    // mail: openMail,
    // chatgpt: openChatgpt,
    // appstore: openAppstore,
    // settings: openSettings,
    // photos: openPhotos,
    // vscode: openVSCode,
    // bin: openBin
}



dockItems.forEach(item => {
    item.addEventListener("click", () => {
        apps[item.dataset.app]();

        apps[app]?.();
    })
})