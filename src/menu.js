export function menuPage(content) {
    content.textContent = "";
    const test = document.createElement("p");
    test.textContent = "Menu page";
    content.appendChild(test);
}