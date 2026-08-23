import { openFinder } from "../../apps/finder/finder.js";
import { openPhotos } from "../../apps/photos/photos.js";

const dockItems = document.querySelectorAll(".dock-item");

const apps = {
    finder: openFinder,
    // brave: openBrave,
    // mail: openMail,
    // chatgpt: openChatgpt,
    // appstore: openAppstore,
    // settings: openSettings,
    photos: openPhotos,
    // vscode: openVSCode,
    // bin: openBin
};


const openApps = {};

dockItems.forEach(item => {
    
    const appName = item.dataset.app;
    
    item.addEventListener("click", () => {
        console.log("clicked", appName)
    
        apps[item.dataset.app]();

    })
})

console.log(dockItems)
console.log(dockItems.length);