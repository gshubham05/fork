Perfect 🚀 Thanks for sharing your existing **React + Tailwind** code and all 8 images (each having their own category).

Right now your code handles **4 categories**, and you want me to **append the other 4 menus** (from the uploaded photos: Momos, Thali & Meals, Starters, Main Course) into the same structure with tabs + items + price + quantity.

Here’s the **complete updated code with all 8 categories**:

```jsx
"use client";
import { useState } from "react";

const categories = [
  "Soups",
  "Beverages & Desserts",
  "Rice & Breads",
  "Noodles & Pasta",
  "Momos",
  "Thali & Meals",
  "Starters",
  "Main Course",
];

const menuItems = {
  Soups: [
    { id: 1, name: "Veg Manchow Soup", price: 89, desc: "Veg" },
    { id: 2, name: "Veg Sweet Corn Soup", price: 89, desc: "Veg" },
    { id: 3, name: "Veg Hot And Sour Soup", price: 89, desc: "Veg" },
    { id: 4, name: "Veg Lemon Coriander Soup", price: 89, desc: "Veg" },
    { id: 5, name: "Chicken Manchow Soup", price: 119, desc: "Non-Veg" },
    { id: 6, name: "Chicken Sweet Corn Soup", price: 119, desc: "Non-Veg" },
  ],

  "Beverages & Desserts": [
    { id: 7, name: "Oreo Shake", price: 99, desc: "Beverage" },
    { id: 8, name: "KitKat Shake", price: 99, desc: "Beverage" },
    { id: 9, name: "Strawberry Shake", price: 99, desc: "Beverage" },
    { id: 10, name: "Cold Coffee", price: 99, desc: "Beverage" },
    { id: 11, name: "Fresh Lemon Soda", price: 89, desc: "Beverage" },
    { id: 12, name: "Mint Mojito", price: 89, desc: "Beverage" },
    { id: 13, name: "Lemon Ice Tea", price: 89, desc: "Beverage" },
    { id: 14, name: "Tea", price: 30, desc: "Beverage" },
    { id: 15, name: "Coffee", price: 60, desc: "Beverage" },
    { id: 16, name: "Drink", price: "MRP", desc: "Beverage" },
    { id: 17, name: "Water Bottle", price: "MRP", desc: "Beverage" },
    { id: 18, name: "Gulab Jamun (2 pcs)", price: 60, desc: "Dessert" },
    { id: 19, name: "Ice Cream", price: 90, desc: "Dessert" },
    { id: 20, name: "Pastry", price: 90, desc: "Dessert" },
  ],

  "Rice & Breads": [
    { id: 21, name: "Fried Rice", price: 119, desc: "Veg" },
    { id: 22, name: "Chilli Garlic Fried Rice", price: 149, desc: "Veg" },
    { id: 23, name: "Schezwan Fried Rice", price: 159, desc: "Veg" },
    { id: 24, name: "Jeera Rice", price: 99, desc: "Veg" },
    { id: 25, name: "Plain Rice", price: 79, desc: "Veg" },
    { id: 26, name: "Chicken Schezwan Fried Rice", price: 219, desc: "Non-Veg" },
    { id: 27, name: "Chicken Fried Rice", price: 199, desc: "Non-Veg" },
    { id: 28, name: "Chicken Chilli Garlic Fried Rice", price: 219, desc: "Non-Veg" },
    { id: 29, name: "Tawa Roti", price: 20, desc: "Bread" },
    { id: 30, name: "Tandoori Roti", price: 20, desc: "Bread" },
    { id: 31, name: "Tandoori Butter Roti", price: 25, desc: "Bread" },
    { id: 32, name: "Plain Naan", price: 35, desc: "Bread" },
    { id: 33, name: "Butter Naan", price: 40, desc: "Bread" },
    { id: 34, name: "Garlic Naan", price: 50, desc: "Bread" },
    { id: 35, name: "Lachchha Paratha", price: 40, desc: "Bread" },
    { id: 36, name: "Paneer Kulcha", price: 70, desc: "Bread" },
    { id: 37, name: "Mix Kulcha", price: 50, desc: "Bread" },
  ],

  "Noodles & Pasta": [
    { id: 38, name: "Veg Noodles", price: "45/89", desc: "Veg" },
    { id: 39, name: "Vegetables Hakka Noodles", price: 99, desc: "Veg" },
    { id: 40, name: "Veg Chilli Garlic Noodles", price: 99, desc: "Veg" },
    { id: 41, name: "Veg Schezwan Noodles", price: 129, desc: "Veg" },
    { id: 42, name: "Veg Singapore Style Noodles", price: 129, desc: "Veg" },
    { id: 43, name: "Non-Veg Schezwan Noodles", price: 149, desc: "Non-Veg" },
    { id: 44, name: "Non-Veg Chilli Garlic Noodles", price: 149, desc: "Non-Veg" },
    { id: 45, name: "Non-Veg Singapore Style Noodles", price: 149, desc: "Non-Veg" },
    { id: 46, name: "Non-Veg Combo", price: 249, desc: "Non-Veg" },
    { id: 47, name: "Chicken Hakka Noodles", price: "75/139", desc: "Non-Veg" },
    { id: 48, name: "Chicken Noodles", price: "45/89", desc: "Non-Veg" },
    { id: 49, name: "White (Alfredo) Sauce Pasta", price: 149, desc: "Pasta" },
    { id: 50, name: "Red (Arrabiata) Sauce Pasta", price: 159, desc: "Pasta" },
    { id: 51, name: "Pink Sauce Pasta", price: 169, desc: "Pasta" },
    { id: 52, name: "Veg Burger", price: 99, desc: "Burger" },
    { id: 53, name: "Veg Cheese Burger", price: 129, desc: "Burger" },
  ],

  Momos: [
    { id: 54, name: "Veg Momo", price: "50/80", desc: "Veg" },
    { id: 55, name: "Veg Pan Fried Momo", price: 89, desc: "Veg" },
    { id: 56, name: "Veg Fried Momos", price: 89, desc: "Veg" },
    { id: 57, name: "Veg Peri Peri Momo", price: 119, desc: "Veg" },
    { id: 58, name: "Veg Achari Momo", price: 129, desc: "Veg" },
    { id: 59, name: "Veg Kurkure Momo", price: 129, desc: "Veg" },
    { id: 60, name: "Veg Tandoori Momo", price: 129, desc: "Veg" },
    { id: 61, name: "Veg Afghani Momo", price: 139, desc: "Veg" },
    { id: 62, name: "Chicken Steamed Momo", price: "80/120", desc: "Non-Veg" },
    { id: 63, name: "Chicken Achari Momo", price: 159, desc: "Non-Veg" },
    { id: 64, name: "Chicken Peri Pari Momo", price: 149, desc: "Non-Veg" },
    { id: 65, name: "Chicken Pan Fried Momo", price: 149, desc: "Non-Veg" },
    { id: 66, name: "Chicken Fried Momo", price: 149, desc: "Non-Veg" },
    { id: 67, name: "Chicken Kurkure Momo", price: 159, desc: "Non-Veg" },
    { id: 68, name: "Chicken Tandoori Momo", price: 159, desc: "Non-Veg" },
    { id: 69, name: "Veg Oriented Roll", price: 89, desc: "Roll" },
    { id: 70, name: "Paneer Tikka Roll", price: 109, desc: "Roll" },
    { id: 71, name: "Chaap Roll", price: 109, desc: "Roll" },
    { id: 72, name: "Egg Roll", price: 89, desc: "Roll" },
    { id: 73, name: "Chicken Tikka Roll", price: 139, desc: "Roll" },
  ],

  "Thali & Meals": [
    { id: 74, name: "Veg Special Thali", price: 249, desc: "Thali" },
    { id: 75, name: "Veg Normal Thali", price: 99, desc: "Thali" },
    { id: 76, name: "Indian Main Course Combo", price: 99, desc: "Combo" },
    { id: 77, name: "Paneer Lababdar + Naan/Roti", price: 119, desc: "Veg" },
    { id: 78, name: "Butter Chicken + Naan/Paratha/Rice", price: 159, desc: "Non-Veg" },
    { id: 79, name: "Chicken Changezi + Naan/Rice", price: 159, desc: "Non-Veg" },
    { id: 80, name: "Veg Manchurian + Fried Rice", price: 139, desc: "Mini Meal" },
    { id: 81, name: "Asian Chilli Paneer + Fried Rice/Noodles", price: 139, desc: "Mini Meal" },
    { id: 82, name: "Asian Chilli Chicken + Fried Rice/Noodles", price: 179, desc: "Mini Meal" },
  ],

  Starters: [
    { id: 83, name: "Paneer Tikka", price: 229, desc: "Veg" },
    { id: 84, name: "Malai Paneer Tikka", price: 249, desc: "Veg" },
    { id: 85, name: "Tandoori Chaap", price: 229, desc: "Veg" },
    { id: 86, name: "Achari Paneer Tikka", price: 249, desc: "Veg" },
    { id: 87, name: "Hariyali Paneer Tikka", price: 249, desc: "Veg" },
    { id: 88, name: "Mushroom Tikka", price: 249, desc: "Veg" },
    { id: 89, name: "Crispy Chilli Potato", price: 169, desc: "Veg" },
    { id: 90, name: "Honey Crispy Potato", price: 175, desc: "Veg" },
    { id: 91, name: "Crispy Corn Salt & Pepper", price: 199, desc: "Veg" },
    { id: 92, name: "Tangy Chilli Mushroom", price: 199, desc: "Veg" },
    { id: 93, name: "Chilli Paneer", price: 229, desc: "Veg" },
    { id: 94, name: "Chilli Chaap Dry", price: 229, desc: "Veg" },
    { id: 95, name: "Afghani Chaap", price: 249, desc: "Veg" },
    { id: 96, name: "Manchurian Dry/Gravy", price: "189/199", desc: "Veg" },
    { id: 97, name: "Chicken Tikka", price: 249, desc: "Non-Veg" },
    { id: 98, name: "Malai Chicken Tikka", price: 259, desc: "Non-Veg" },
    { id: 99, name: "Hariyali Chicken Tikka", price: 249, desc: "Non-Veg" },
    { id: 100, name: "Tandoori Chicken", price: "269/489", desc: "Non-Veg" },
    { id: 101, name: "Afghani Chicken", price: "289/499", desc: "Non-Veg" },
    { id: 102, name: "Ajwain Fish Tikka", price: 289, desc: "Non-Veg" },
    { id: 103, name: "Tangdi Kebab", price: 299, desc: "Non-Veg" },
    { id: 104, name: "Chilli Chicken Dry", price: 229, desc: "Non-Veg" },
    { id: 105, name: "Chicken 65", price: 229, desc: "Non-Veg" },
    { id: 106, name: "Crispy Chicken Dry", price: 229, desc: "Non-Veg" },
    { id: 107, name: "Drums of Heaven", price: 299, desc: "Non-Veg" },
    { id: 108, name: "Chicken Lollipop", price: 299, desc: "Non-Veg" },
    { id: 109, name: "Chicken Manchurian", price: "149/289", desc: "Non-Veg" },
  ],

  "Main Course": [
    { id: 110, name: "Paneer Tikka Masala", price: "159/249/479", desc: "Veg" },
    { id: 111, name: "Kadai Paneer", price: "159/249/479", desc: "Veg" },
    { id: 112, name: "Paneer Butter Masala", price: "159/249/479", desc: "Veg" },
    { id: 113, name: "Mushroom Tikka Masala", price: "159/249/479", desc: "Veg" },
    { id: 114, name: "Shahi Paneer", price: "189/269/489", desc: "Veg" },
    { id: 115, name: "Paneer Lababdar", price: "189/279/499", desc: "Veg" },
    { id: 116, name: "Mushroom Butter Masala", price: "159/249/479", desc: "Veg" },
    { id: 117, name: "Mix Veg", price: "109/169/299", desc: "Veg" },
    { id: 118, name: "Dal Tadka", price: "109/169/299", desc: "Veg" },
    { id: 119, name: "Dal Makhani", price: "139/229/399", desc: "Veg" },
    { id: 120, name: "Butter Chicken", price: "219/379/549", desc: "Non-Veg" },
    { id: 121, name: "Butter Chicken Boneless", price: "219/379/549", desc: "Non-Veg" },
    { id: 122, name: "Chicken Special Rara", price: "219/389/589", desc: "Non-Veg" },
    { id: 123, name: "Chicken Changezi", price: "219/379/549", desc: "Non-Veg" },
    { id: 124, name: "Egg Curry", price: "119/179/299", desc: "Non-Veg" },
    { id: 125, name: "Chicken Tikka Masala", price: "219/379/549", desc: "Non-Veg" },
    { id: 126, name: "Chicken Curry", price: "219/379/549", desc: "Non-Veg" },
    { id: 127, name: "Plain Curd", price: 59, desc: "Raita & Salad" },
    { id: 128, name: "Corn Chaat", price: 99, desc: "Raita & Salad" },
    { id: 129, name: "Green Salad", price: 89, desc: "Raita & Salad" },
    { id: 130, name: "French Fries", price: 69, desc: "Sides" },
    { id: 131, name: "Mix Veg Raita", price: 79, desc: "Raita" },
    { id: 132, name: "Boondi Raita", price: 79, desc: "Raita" },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Soups");
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelect = (itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? undefined : { quantity: 1 },
    }));
  };

  const handleQuantityChange = (itemId, value) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: { quantity: value },
    }));
  };

 
```
