const categories = document.querySelector('#categories'),
	item = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.children.length}`);

for (let elem of categories.children) {
	console.log(`Category: ${elem.firstElementChild.textContent}`)
	console.log(`Elements: ${elem.lastElementChild.children.length}`)
}


// console.log(`Number of categories: ${categories.children.length}`);
// item.forEach(elem => {
// 	for (let child of elem.children) {
// 		if (child.tagName === 'H2') console.log(`Category: ${child.textContent}`);
// 	}
// 	// console.log(`Category: ${elem.children[0].textContent}`);
// 	console.log(`Elements ${elem.lastElementChild.children.length}`)
// });
