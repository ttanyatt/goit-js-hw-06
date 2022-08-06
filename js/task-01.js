const categoriesQuantityEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesQuantityEl.length}`);

categoriesQuantityEl.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent} `);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});