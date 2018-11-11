
let fruits = ["Banana", "Orange", "Apple", "Mango"];

/* Basic For */
console.log('\n-- Basic for --');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/* Basic While */
console.log('\n-- Basic while --');
let j = 0;
while(j < 4) {
    console.log(fruits[j]);
    j++;
}

/* For each */
console.log('\n-- forEach --');
fruits.forEach((item) => {
    console.log(item);
});