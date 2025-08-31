import bgImage from "./images/pexels-brettjordan-825661.jpg";

export function homePage(content) {
    document.body.style.background = `
    linear-gradient(rgba(0,0,0,0.2), 
    rgba(0,0,0,0.2)),
    url(${bgImage})
    `;
    document.body.style.backgroundSize = "cover";
    content.textContent = "";
    const home = document.createElement("div");
    const name = document.createElement("h1");
    const tagline = document.createElement("p");

    home.classList.add("home");

    name.textContent = "La Tavola";
    tagline.textContent = "Where Flavor Meets Tradition";

    home.appendChild(name);
    home.appendChild(tagline);
    content.appendChild(home);
}