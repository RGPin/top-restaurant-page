// function importAll(r) {
//   let images = {};
//   r.keys().forEach((file) => {
//     images[file.replace('./', '')] = r(file);
//   });
//   return images;
// }

const descriptions = {
  "Bruschetta.jpeg": "Bruschetta: Toasted baguette topped with fresh tomatoes, basil, and garlic.",
  "Caprese_Skewers.jpeg": "Caprese Skewers: Mozzarella, cherry tomatoes, and basil drizzled with balsamic.",
  "Chicken_Wings.jpeg": "Chicken Wings: Choice of buffalo, BBQ, or honey garlic sauce.",
  "Garlic_Parmesan.jpeg": "Garlic Parmesan Fries: Crispy fries tossed in garlic butter and parmesan.",
  "Stuffed_Mushrooms.jpeg": "Stuffed Mushrooms: Baked mushrooms filled with cream cheese and herbs.",
  "Fresh_Lemonade.jpeg": "Fresh Lemonade: Classic sweet and tangy lemonade.",
  "Iced_Coffee.jpeg": "Iced Coffee: Cold brewed coffee with cream and sugar.",
  "Mango_Smoothie.jpeg": "Mango Smoothie: Blended fresh mango with yogurt and honey.",
  "Red_Wine.jpeg": "Red Wine (Glass): House-selected cabernet sauvignon.",
  "Soft_Drinks.jpeg": "Soft Drinks: Choice of Coke, Sprite, or Fanta.",
  "Chocolate_Lava_Cake.jpeg": "Chocolate Lava Cake: Warm chocolate cake with molten center, served with vanilla ice cream.",
  "Fruit_Tart.jpeg": "Fruit Tart: Flaky crust with custard cream topped with fresh fruits.",
  "Ice_Cream_Trio.jpeg": "Ice Cream Trio: Three scoops: chocolate, vanilla, and strawberry.",
  "New_York_Cheesecake.jpeg": "New York Cheesecake: Creamy cheesecake with a graham cracker crust.",
  "Tiramisu.jpeg": "Tiramisu: Coffee-soaked ladyfingers layered with mascarpone cream.",
  "Classic_Cheeseburger.jpeg": "Classic Cheeseburger: Angus beef patty, cheddar, lettuce, tomato, served with fries.",
  "Grilled_Ribeye_Steak.jpeg": "Grilled Ribeye Steak: 12oz ribeye with garlic mashed potatoes & vegetables.",
  "Lemon_Herb_Salmon.jpeg": "Lemon Herb Salmon: Pan-seared salmon with lemon butter sauce and rice.",
  "Spaghetti_Carbonara.jpeg": "Spaghetti Carbonara: Creamy pasta with pancetta, parmesan, and black pepper.",
  "Vegetable_Stir-Fry.jpeg": "Vegetable Stir-Fry: Seasonal veggies tossed in a soy-ginger sauce with rice.",
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
  "Ice_Cream_Trio.jpeg": "7$",
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