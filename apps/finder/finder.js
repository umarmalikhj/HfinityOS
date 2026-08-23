import{ createWindow } from "../../components/window/window.js"

export function openFinder() {
    const windowEl = createWindow();

    loadSidebar(windowEl);
    loadHeader(windowEl);
    loadContent(windowEl);

    return windowEl;
}

function loadHeader(windowEl) {
    const header = windowEl.querySelector(".window-header");
    header.innerHTML = `
        <div class="window-nvg">
            <div>
                <i class="ti ti-chevron-left"></i>
                <i class="ti ti-chevron-right"></i>
            </div>

            <h3>Recents</h3>
        </div>

        <div class="window-quick-actions">
            <div class="quick-view">
                <i class="ti ti-layout-grid font1"></i>
                <i class="ti ti-selector"></i>
            </div>

            <div class="quick-act">
                <div class="window-sort">
                    <img src="./Assets/Icons/Window Icons/grid-divider.svg" height="20px" width="20px">
                    <i class="ti ti-chevron-down"></i>
                </div>

                <i class="ti ti-share-2 font1"></i>

                <i class="ti ti-tag font1"></i>

                <div class="window-more">
                    <i class="ti ti-dots-circle-horizontal font1"></i>
                    <i class="ti ti-chevron-down"></i>
                </div>
            </div>

            <div class="quick-more">
                <i class="ti ti-chevron-down"></i>

                <i class="ti ti-search font1"></i>
            </div>
                        
        </div>
    `;
};

function loadSidebar(windowEl) {
    const sidebar = windowEl.querySelector(".window-sidebar");
    sidebar.innerHTML = `
        <div class="sidebar-group">
            <h3 class="sidebar-head">Favorites</h3>

            <div class="icon-list">

                <button class="sidebar-icons">
                    <i class="ti ti-clock-hour-9"></i>
                    <span>Recents</span>
                </button>

                <button class="sidebar-icons">
                    <i class="ti ti-brand-appstore"></i>
                    <span>Applications</span>
                </button>

                <button class="sidebar-icons">
                    <i class="ti ti-app-window"></i>
                    <span>Desktop</span>
                </button>

                <button class="sidebar-icons">
                    <i class="ti ti-circle-arrow-down"></i>
                    <span>Downloads</span>
                </button>

            </div>

        </div>

        <div class="sidebar-group">
            <h3 class="sidebar-head">iCloud</h3>

            <div class="icon-list">

                <button class="sidebar-icons">
                    <i class="ti ti-cloud" style="color:#30CEEA;"></i>
                    <span>iCloud Drive</span>
                </button>

                <button class="sidebar-icons">
                    <i class="ti ti-file" style="color:#30CEEA;"></i>
                    <span>Documents</span>
                </button>

                <button class="sidebar-icons">
                    <i class="ti ti-app-window" style="color:#30CEEA;"></i>
                    <span>Desktop</span>
                </button>

                <button class="sidebar-icons">
                    <i class="ti ti-folder-share" style="color:#30CEEA;"></i>
                    <span>Shared</span>
                </button>

            </div>

        </div>
    `;
};

function loadContent(windowEl) {
    const content = windowEl.querySelector(".window-content");

    content.innerHTML = `

    `;
}