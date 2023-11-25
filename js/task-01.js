'use strict'

const allCategories = document.getElementById('categories');

const categoryItems = allCategories.querySelectorAll('li.item'); 

console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;

    const categoryListElements = categoryItem.querySelectorAll('ul > li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryListElements}`);
})
