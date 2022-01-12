//Sets are essentially an array that is guaranteed to always have all the items in it be unique(unique list)
//It's not possible to access to elements by index, the only method you can use is has

const set = new Set([1, 2, 3, 4]);
set.add(5);
set.add(4);

console.log(set, set.has(3));

set.delete(3);
console.log(set, set.size);

function removeDups(array) {
    return [...new Set(array)];
}

console.log(removeDups([1, 2, 3, 4, 5, 2, 3, 4]));
