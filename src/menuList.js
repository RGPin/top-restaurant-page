// function importAll(r) {
//   let images = {};
//   r.keys().forEach((file) => {
//     images[file.replace('./', '')] = r(file);
//   });
//   return images;
// }

const descriptions = {
  "Bruschetta.jpeg": "Toasted baguette topped with fresh tomatoes, basil, and garlic.",
  "Caprese_Skewers.jpeg": "Mozzarella, cherry tomatoes, and basil drizzled with balsamic.",
  "Chicken_Wings.jpeg": "Choice of buffalo, BBQ, or honey garlic sauce.",
  "Garlic_Parmesan.jpeg": "Crispy fries tossed in garlic butter and parmesan.",
  "Stuffed_Mushrooms.jpeg": "Baked mushrooms filled with cream cheese and herbs.",
  "Fresh_Lemonade.jpeg": "Classic sweet and tangy lemonade.",
  "Iced_Coffee.jpeg": "Cold brewed coffee with cream and sugar.",
  "Mango_Smoothie.jpeg": "Blended fresh mango with yogurt and honey.",
  "Red_Wine.jpeg": "House-selected cabernet sauvignon.",
  "Soft_Drinks.jpeg": "Choice of Coke, Sprite, or Fanta.",
  "Chocolate_Lava_Cake.jpeg": "Warm chocolate cake with molten center, served with vanilla ice cream.",
  "Fruit_Tart.jpeg": "Flaky crust with custard cream topped with fresh fruits.",
  "Ice_Cream_Trio": "Three scoops: chocolate, vanilla, and strawberry.",
  "New_York_Cheesecake.jpeg": "Creamy cheesecake with a graham cracker crust.",
  "Tiramisu.jpeg": "Coffee-soaked ladyfingers layered with mascarpone cream.",
  "Classic_Cheeseburger.jpeg": "Angus beef patty, cheddar, lettuce, tomato, served with fries.",
  "Grilled_Ribeye_Steak.jpeg": "12oz ribeye with garlic mashed potatoes & vegetables.",
  "Lemon_Herb_Salmon.jpeg": "Pan-seared salmon with lemon butter sauce and rice.",
  "Spaghetti_Carbonara.jpeg": "Creamy pasta with pancetta, parmesan, and black pepper.",
  "Vegetable_Stir-Fry.jpeg": "Seasonal veggies tossed in a soy-ginger sauce with rice.",
};

const pricing = {
  "Bruschetta.jpeg": "6$",
  "Caprese_Skewers.jpeg": "7$",
  "Chicken_Wings.jpeg": "9$",
  "Garlic_Parmesan.jpeg": "7$",
  "Stuffed_Mushrooms.jpeg": "8$",
  "Fresh_Lemonade.jpeg": "4$",
  "Iced_Coffee.jpeg": "5$",
  "Mango_Smoothie.jpeg": "6$",
  "Red_Wine.jpeg": "8$",
  "Soft_Drinks.jpeg": "3$",
  "Chocolate_Lava_Cake.jpeg": "9$",
  "Fruit_Tart.jpeg": "9$",
  "Ice_Cream_Trio": "7$",
  "New_York_Cheesecake.jpeg": "8$",
  "Tiramisu.jpeg": "8$",
  "Classic_Cheeseburger.jpeg": "15$",
  "Grilled_Ribeye_Steak.jpeg": "28$",
  "Lemon_Herb_Salmon.jpeg": "22$",
  "Spaghetti_Carbonara.jpeg": "18$",
  "Vegetable_Stir-Fry.jpeg": "14$",
};

function importAll(r) {
  let images = {};
  r.keys().forEach((file) => {
    const fileName = file.replace('./', '');
    images[fileName] = {
      src: r(file),
      description: descriptions[fileName] || "No description available",
      pricing: pricing[fileName] || "No pricing available",
    };
  });
  return images;
}

const appetizers = importAll(require.context('./images/menu/appetizers', false, /\.(png|jpe?g|svg)$/));
const beverages = importAll(require.context('./images/menu/beverages', false, /\.(png|jpe?g|svg)$/));
const desserts = importAll(require.context('./images/menu/desserts', false, /\.(png|jpe?g|svg)$/));
const main = importAll(require.context('./images/menu/main', false, /\.(png|jpe?g|svg)$/));

export { appetizers, beverages, desserts, main };

// export { appetizers };