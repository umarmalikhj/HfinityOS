// export function createWindow() {
//     const desktop = document.querySelector(".desktop");

//     const windowEl = document.createElement("section");
//     windowEl.className = "window";

//     windowEl.innerHTML = `
//         <div class="window-sidebar">
                
//             <div class="window-controls">
                // <button class="close">
                //     <i class="fa-solid fa-circle-xmark" style="color: #FF5F58;"></i>
                // </button>
                // <button class="minimize">
                //     <i class="fa-solid fa-circle-minus" style="color: #FEBC2E;"></i>
                // </button>
                // <button class="maximize">
                //     <i class="fa-solid fa-circle-plus" style="color: #27C840;"></i>
                // </button>
//             </div>

//             <div class="sidebar-links">

//                 <!-- Sidebar Content loaded dynamically-->

//             </div>

//         </div>

//         <div class="window-main">
//             <div class="window-header">

//                 <!-- window header loaded dynamically -->

//             </div>

//             <div class="window-content">

//                 <!-- window content loaded dynamically -->

//             </div>

//         </div>
//     `;

//     desktop.appendChild(windowEl);

//     const closeBtn = windowEl.querySelector(".close");
//     const miniBtn = windowEl.querySelector(".minimize");
//     const maxBtn = windowEl.querySelector(".maximize");

//     closeBtn.addEventListener("click", () => {
//         windowEl.remove();
//     })

//     maxBtn.addEventListener("click", () => {
//         windowEl.classList.toggle("fullscreen");
//     })

//     miniBtn.addEventListener("click", () => {
//         windowEl.classList.add("minimized");
//     })

//     return windowEl;
// }

// // function windowDrag() {
// //     const dragElement = windowEl.querySelector(".window-header");

// //     let offsetX = 0;
// //     let offsetY = 0;

// //     function OnMouseMove(event) {
// //         dragElement.style.left = `${event.clientX - offsetX}px`;
// //         dragElement.style.top = `${event.clientY - offsetY}px`;
// //     }

// //     function onMouseUp() {
// //         document.removeEventListener("mousemove", OnMouseMove);
// //         document.removeEventListener("mouseup", onMouseUp);
// //         windowDrag.style.cursor = "pointer";
// //     }

// //     dragElement.addEventListener("mousedown"), (event) => {
// //         offsetX = event.clientX - dragElement.offsetLeft;
// //         offsetY = event.clientY - dragElement.offsetTop;

// //         dragElement.style.cursor = "pointer";

// //         document.addEventListener("mousemove", OnMouseMove);
// //         document.addEventListener("mouseup", onMouseUp);
// //     }
// // }