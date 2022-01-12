const items = [
    {
        id: 1,
        name: "Test 1",
        description: "Desc 1",
    },
    {
        id: 2,
        name: "Test 2",
        description: "Desc 2",
    },
    {
        id: 3,
        name: "Test 3",
        description: "Desc 3",
    },
];

function getItem(id) {
    return items.find((item) => item.id === id);
}

console.log(getItem(1));

const user = {
    name: "Chris",
    age: 25,
};
const itemsMap = new Map([
    [1, { id: 1, name: "Test 1", description: "Desc 1" }],
    [(2, { id: 2, name: "Test 2", description: "Desc 2" })],
]);

itemsMap.set(3, { id: 3, name: "Test 3", description: "Desc 3" });
itemsMap.set(3, { id: 3, name: "Test 3", description: "Desc 3" });
itemsMap.set(4, { id: 4, name: "Test 4", description: "Desc 4" });
itemsMap.set(user, user);

console.log(itemsMap, itemsMap.size);

function getMapItem(id) {
    return itemsMap.get(id);
}

itemsMap.delete(4);

const user2 = user;
console.log(getMapItem(user2));
console.log(itemsMap.has(1));
