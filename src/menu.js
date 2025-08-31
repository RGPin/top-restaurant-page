import { appetizers, beverages, desserts, main } from "./menuList";

function menuCard(menu) {
    const menuArray = [appetizers, beverages, desserts, main];
    menuArray.forEach((category) => {
        for (const [key, value] of Object.entries(category)) {
            const card = document.createElement("div");
            const img = document.createElement("img");
            const description = document.createElement("p");
            const pricing = document.createElement("p");

            img.src = value.src;
            description.textContent = value.description;
            pricing.textContent = value.pricing;

            card.appendChild(img);
            card.appendChild(description);
            card.appendChild(pricing);
            menu.appendChild(card);
        }
    });
};

export function menuPage(content) {
    document.body.style.background = `black`;
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.textContent = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");

    menuCard(menu);

    content.appendChild(menu);
}