export function homePage(content) {
    content.textContent = "";
    const test = document.createElement("p");
    test.textContent = "Home page";
    content.appendChild(test);
}