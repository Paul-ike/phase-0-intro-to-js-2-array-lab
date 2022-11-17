// Write your solution here!


function cats() {
    cats = ["Milo", "Otis", "Garfield"];
}

cats()

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
    cats.push(`${name}`)
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`)
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift()
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    let addCats = [...cats,`${name}`];
    return addCats
}
appendCat("Broom")

function prependCat(name) {
    let preCats = [`${name}`, ...cats]
    return preCats
}
prependCat("Arnold")

function removeLastCat() {
    let remCats = cats.slice(0, cats.length - 1);
    return remCats;
}
removeLastCat()

function removeFirstCat() {
    let firCat = cats.slice(1)
    return firCat
}
removeFirstCat()