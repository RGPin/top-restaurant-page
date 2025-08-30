export function aboutPage(content) {
    content.textContent = "";
    const test = document.createElement("p");
    test.textContent = "About page";
    content.appendChild(test);
}