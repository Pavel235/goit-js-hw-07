'use strict'

const allCategories = document.getElementById('categories');

const categoryItems = allCategories.querySelectorAll('li.item'); 

console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.firstElementChild.textContent;
    const categoryListItems = categoryItem.lastElementChild.children.length; 

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryListItems}`);
})



