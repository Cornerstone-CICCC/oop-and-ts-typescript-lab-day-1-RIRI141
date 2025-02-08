"use strict";
// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.
const inventory = [];
function addItem(itemId, itemName, quantity, isAvailable = false) {
    const item = {
        itemId,
        details: [itemName, quantity, isAvailable]
    };
    inventory.push(item);
    return item;
}
function updateStock(itemId, quantity) {
    const stock = inventory.find((stock) => stock.itemId === stock.itemId);
    if (!stock) {
        return "Item not found";
    }
    stock.details[1] = quantity;
    return `Stock updated for ${stock.details[0]}, new quantity: ${quantity}`;
}
// let message: string = ""
// inventory.forEach(item => {
//     item.itemId == itemId ? item.details[1] = quantity : ""
//     message =`Stock updated for ${item.details[0]}, new quantity: ${item.details[1]}`
// })
// return message
function checkStock(itemId) {
    const stock = inventory.find((stock) => stock.itemId === stock.itemId);
    if (!stock) {
        return false;
    }
    return stock.details[2];
}
// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)); // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)); // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)); // true
