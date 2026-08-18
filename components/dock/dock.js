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
};

const openApps = {};

function onClose() {
    delete openApps[appName];
}

dockItems.forEach(item => {
    item.addEventListener("click", () => {
        const appName = item.dataset.app;

        if (openApps[appName]) {
            openApps[appName].classList.remove("minimized");
        }

        else {
            const window = apps[appName]();
            openApps[appName] = window;
        }
    })
});

