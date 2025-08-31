import bgImage from "./images/pexels-hasan-kurt-154798938-10749578.jpg"

export function aboutPage(content) {
    document.body.style.background = `
        linear-gradient(rgba(0,0,0,0.2), 
        rgba(0,0,0,0.2)),
        url(${bgImage})
        `;
    document.body.style.backgroundSize = "cover";
    content.textContent = "";
    const test = document.createElement("p");
    test.textContent = "Menu page";
    test.textContent = "About page";
    content.appendChild(test);
}