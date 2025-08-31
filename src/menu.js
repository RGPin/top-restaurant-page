import { appetizers, beverages, desserts, main } from "./menuList";

const categories = {
    appetizers,
    beverages,
    desserts,
    main: main,
};


function menuCard(category, categoryListContainer) {
    const selectedCategory = categories[category];
    if (!selectedCategory) return;

    categoryListContainer.textContent = "";

    for (const [_key, value] of Object.entries(selectedCategory)) {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const description = document.createElement("p");
        const pricing = document.createElement("p");

        card.classList.add("card");
        description.classList.add("description");
        pricing.classList.add("price");

        img.src = value.src;
        img.alt = value.description;
        description.textContent = value.description;
        pricing.textContent = value.pricing;

        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(pricing);
        categoryListContainer.appendChild(card);

    };
};

export function menuPage(content) {
    document.body.style.background = `black`;
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.textContent = "";

    const menu = document.createElement("div");
    const categoryBtnContainer = document.createElement("div");
    const appetizerBtn = document.createElement("button");
    const beveragesBtn = document.createElement("button");
    const mainBtn = document.createElement("button");
    const dessertsBtn = document.createElement("button");
    const categoryListContainer = document.createElement("div");

    appetizerBtn.textContent = "Appetizers";
    beveragesBtn.textContent = "Beverages";
    mainBtn.textContent = "Main Courses";
    dessertsBtn.textContent = "Desserts";

    menuCard("appetizers", categoryListContainer);

    appetizerBtn.addEventListener("click", () => menuCard("appetizers", categoryListContainer));
    beveragesBtn.addEventListener("click", () => menuCard("beverages", categoryListContainer));
    mainBtn.addEventListener("click", () => menuCard("main", categoryListContainer));
    dessertsBtn.addEventListener("click", () => menuCard("desserts", categoryListContainer));

    categoryBtnContainer.appendChild(appetizerBtn);
    categoryBtnContainer.appendChild(beveragesBtn);
    categoryBtnContainer.appendChild(mainBtn);
    categoryBtnContainer.appendChild(dessertsBtn);
    menu.appendChild(categoryBtnContainer);
    menu.appendChild(categoryListContainer);

    menu.classList.add("menu");
    categoryBtnContainer.classList.add("category-btns");
    categoryListContainer.classList.add("category-list");

    content.appendChild(menu);
}